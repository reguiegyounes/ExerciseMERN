import { useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';


import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Col,
    Alert
  } from 'antd';

  

function CreateExercises() {
    
    const [form] = Form.useForm();
    const [users,setUsers]=useState([]);
    const [redirect,setRrdirect]=useState(false);
    const [alert, setAlert] = useState(false);

  
    const onFinish = (values) => {
        axios.post("/exercises/add",values)
        .then(res=>{
            setAlert(true)
        })

        form.resetFields();
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  

   
    
    useEffect(() => {
        axios.get(`/users`)
        .then(res=>{
            if(res.data.length>0){
                setUsers(res.data.map(user=>user.username));
            }
            else{
                setRrdirect(true);
            }
        })
    }, []);
    
    if (redirect) {
        return <Redirect  to='/user'/>
    }
        return(
            <>
               <Col span={22} offset={1}>
                   <h1>Create Exercise</h1>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        layout="horizontal"
                        
                    >
                        
                        <Form.Item label="Username" name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select username !',
                                }
                            ]}
                        >
                            <Select onChange={()=>{setAlert(false)}}>
                                {users.map(user=>{
                                    return(
                                        <Select.Option key={user} >{user}</Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item >
                        <Form.Item label="Description" name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input description !',
                                }
                            ]}
                        >
                            <Input.TextArea onChange={()=>{setAlert(false)}}/>
                        </Form.Item>
                        <Form.Item label="Duration" name="duration"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input duration !',
                                }
                            ]}
                        >
                            <InputNumber onChange={()=>{setAlert(false)}}/>
                        </Form.Item>
                        <Form.Item label="Date" name="date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input date !',
                                }
                            ]}
                        >
                            <DatePicker onChange={()=>{setAlert(false)}}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 4 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 4 }}>
                            {alert? <Alert message="Exercise added" type="success" showIcon /> : <div></div>}
                        </Form.Item>
                    </Form>
               </Col>
                
            </>
        )
    
    


};



export default CreateExercises