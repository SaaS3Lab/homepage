import React from 'react'
import {
    MailOutlined,
    TwitterOutlined,
    SendOutlined,
    GithubOutlined,
    HomeOutlined
} from '@ant-design/icons'

import './contact.css'
import { Space } from 'antd'
import {white_paper_link} from "../../App";
export const twitter_link = "https://twitter.com/SaaS3Lab"
export const telegram_link = "https://t.me/layerXnetwork"
export const github_link = "https://github.com/SaaS3Lab"
export const map_link = "https://goo.gl/maps/L4vicaLurYULHQ8Z6"

const ContactBar = ({className}) => {
    return (
        <Space className={`contact-bar ${className}`} size="large" >

            <div className="contact-unfold">
                <MailOutlined className="contact-icon"/>
                <div className="contact-unfold-text" onClick={()=>{window.open("mailto:contact@saas3.io")}}>contact@saas3.io</div>
            </div>

            
            <div className="contact-unfold contact-unfold-short">
                <TwitterOutlined className="contact-icon"/>
                <div className="contact-unfold-text" onClick={()=>{window.open(twitter_link)}}>@SaaS3Lab</div>
            </div>

            <div className="contact-unfold contact-unfold-short">
                <SendOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text" onClick={()=>{window.open(telegram_link)}}>SaaS3Lab</div>
            </div>

            <div className="contact-unfold">
                <GithubOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text" onClick={()=>{window.open(github_link)}}>https://github.com/SaaS3Lab</div>
            </div>
            <div className="contact-unfold">
                <HomeOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text" onClick={()=>{window.open(map_link)}}>Singapore</div>
            </div>
            

        </Space>
    )
}

export default ContactBar