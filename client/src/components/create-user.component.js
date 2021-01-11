import {Form,Input,Button,Col,Alert} from 'antd';
import React,{ useState} from 'react';
import axios from 'axios';



function CreateUser() {
    const [form] = Form.useForm();
    const [alert, setAlert] = useState(false)
    const onFinish = (values) => {
        axios.post('/users/add',values)
        .then(res=>{
            setAlert(true)
        })

        form.resetFields();
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    
    return( 

        <>
            <Col span={22} offset={1}>
                <h1>Create User</h1>
                <Form
                    onC
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                
                    size='default'
                >
                    <Form.Item label="Username" 
                                name="username" 
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                    >
                        <Input  onChange={()=>{setAlert(false)}}/>
                    </Form.Item>
                
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Add User 
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        {alert? <Alert message="User added" type="success" showIcon /> : <div></div>}
                    </Form.Item>
                </Form>
            </Col>
            
        </>
            
    )


}
export default CreateUser;