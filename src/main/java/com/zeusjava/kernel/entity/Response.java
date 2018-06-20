package com.zeusjava.kernel.entity;

/**
 * Created by ZhangYige on 2018/6/13.
 */
public class Response {
    private int errorCode;//0-成功 其他值失败
    private String errorMessage;//错误信息

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
