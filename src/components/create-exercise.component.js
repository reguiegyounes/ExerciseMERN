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
    Col
  } from 'antd';

  

function CreateExercises() {
    
    
    const [users,setUsers]=useState([]);
    const [redirect,setRrdirect]=useState(false);

  
    const onFinish = (values) => {
        axios.post('http://localhost:9000/exercises/add',values)
        .then(res=>console.log(res.data))
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  

   
    
    useEffect(() => {
        axios.get("http://localhost:9000/users")
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
                        
                        <Form.Item label="Username" name="username">
                            <Select>
                                {users.map(user=>{
                                    return(
                                        <Select.Option key={user} >{user}</Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item >
                        <Form.Item label="Description" name="description">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="Duration" name="duration">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Date" name="date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 4 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
               </Col>
                
            </>
        )
    
    


};



export default CreateExercises