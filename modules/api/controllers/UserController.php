<?php

namespace app\modules\api\controllers;

use Yii;
use app\models\LoginForm;
use yii\rest\Controller;

class UserController extends Controller
{
    public function actionLogin()
    {
//        if (!Yii::$app->user->isGuest) {
//            return $this->goHome();
//        }
        echo '<pre>';
        var_dump(Yii::$app->request->post());
        echo '</pre>';
        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post(), '') && $model->login()) {
            return $model->getUser();
        }

        Yii::$app->response->statusCode = 422;
        return [
            'errors' => $model->errors
        ];
    }
}