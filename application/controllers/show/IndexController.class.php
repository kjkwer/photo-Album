<?php

/**
 * Created by PhpStorm.
 * User: lilin
 * Date: 2018/4/7
 * Time: 22:06
 */
class IndexController extends BaseController
{
    public function indexAction(){
        //>>获取用户数据
        $userId  = !empty($_COOKIE["user"])?$_COOKIE["user"]:"";
        $model = new ModelNew("photo");
        $chaeck = "";
        $data = $model->where(["user"=>$userId])->find()->one();
        include CUR_VIEW_PATH."Sindex" . DS . "index_index.html";
    }
    //>>图片上传
    public function uploadAction(){
        $result = array("code"=>500,"message"=>"文件上传失败");
        //>>图片数据
        $pictureData = $_FILES['fileToUpload'];
        $pictureSize = $pictureData["size"]/1024;
        //>>判断文件上传是否正常
        if($pictureData["error"]==0){
            //>>判断文件上传格式是否正确
            if (explode("/",$pictureData["type"])[0]=="image"){
                //>>移动图片
                //设置图片保存路径
                $filePath = "public/uploads/".date("Ymd",time());
                if (!is_dir($filePath)){
                    mkdir ($filePath,0777,true);
                }
                //>>移动文件
                $file = $filePath."/".uniqid().stristr($pictureData['name'],'.');
                if(move_uploaded_file($pictureData["tmp_name"],$file)){
//                    if ($pictureSize>=500){
//                        $this->library("Imgcompress");
//                        $image  = new Imgcompress($file,1);
//                        $image->compressImg($file);
//                    }
                    $result = array("code"=>200,"message"=>$file);
                }else{
                    $result = array("code"=>502,"message"=>"文件保存失败");
                }
            }else{
                $result = array("code"=>501,"message"=>"请上传图片");
            }
        }
        echo json_encode($result);
    }
    public function shareyAction(){
        $id = !empty($_GET["id"])?$_GET["id"]:"";
        $model = new ModelNew("photo");
        $data = $model->where(["id"=>$id])->find()->one();
        $chaeck = 89;
        include CUR_VIEW_PATH."Sindex" . DS . "index_share.html";
    }
    //>>保存数据
    public function saveAction(){
        $result = array("code"=>500,"message"=>"相册保存失败");
        $model = new ModelNew("sl_photo");
        $data = $model->where(["user"=>$_POST["user"]])->find("id")->one();
        $id = !empty($data["id"])?$data["id"]:'';
        if ($id == ""){
            if ($rs = $model->insert($_POST)){
                $result = array("code"=>200,"message"=>"相册保存成功","id"=>$rs);
            }else{
                $result = array("code"=>501,"message"=>"相册保存失败","id"=>"");
            }
        }else{
            unset($_POST["id"]);
            $_POST["dtime"] = date("Y-m-d H:i:s",time());
            if($model->where(["id"=>$id])->update($_POST)){
                $result = array("code"=>200,"message"=>"相册保存成功","id"=>$id);
            }else{
                $result = array("code"=>502,"message"=>"相册保存失败","id"=>"");
            }
        }
        setcookie("user",$_POST["user"],time()+3600*24*365);
        echo json_encode($result);
    }
    //>>设置cookie模拟登陆
    public function testAction(){
        setcookie("id",5);
    }
    public function getAction(){
        echo $_COOKIE["id"];
    }
    public function shareAction(){
        //微信分享
        $this->library("JSSDKoth");
        $appid = "wxc3c007cddc714a5d";
        $appsecret = "b3e7d6edeec7dcbb2255179b3b634f2a";
        $jssdk = new JSSDK($appid,$appsecret);
        $jssdk->url = $_GET['url'];
        $data['package'] = $jssdk->GetSignPackage();
        $data['status'] = true;
        $this->ajaxReturn($data);
    }
}