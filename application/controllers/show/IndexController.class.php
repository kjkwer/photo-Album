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
        $userId  = !empty($_COOKIE["id"])?$_COOKIE["id"]:"";
        $model = new ModelNew("photo");
        $data = $model->where(["user"=>$userId])->find()->one();
        include CUR_VIEW_PATH."Sindex" . DS . "index_index.html";
    }
    //>>图片上传
    public function uploadAction(){
        $result = array("code"=>500,"message"=>"文件上传失败");
        //>>图片数据
        $pictureData = $_FILES['fileToUpload'];
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
    //>>保存数据
    public function saveAction(){
        $result = array("code"=>500,"message"=>"相册保存失败");
        $dataId = $_POST["id"];
        $model = new ModelNew("sl_photo");
        if ($dataId==""){
            if ($model->insert($_POST)){
                $result = array("code"=>200,"message"=>"相册保存成功");
            }else{
                $result = array("code"=>501,"message"=>"相册保存失败");
            }
        }else{
            if($model->where(["id"=>$dataId])->update($_POST)){
                $result = array("code"=>200,"message"=>"相册保存成功");
            }else{
                $result = array("code"=>502,"message"=>"相册保存失败");
            }
        }
        echo json_encode($result);
    }
    //>>设置cookie模拟登陆
    public function testAction(){
        setcookie("id",5);
    }
    public function getAction(){
        echo $_COOKIE["id"];
    }
}