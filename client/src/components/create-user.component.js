import {Form,Input,Button,Col} from 'antd';
import axios from 'axios';


function CreateUser() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success add user:', values);
        axios.post('/users/add',values)
        .then(res=>console.log(res.data))

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
                        <Input />
                    </Form.Item>
                
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Add User
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            
        </>
            
    )


}
export default CreateUser;