import React,{ useState,useEffect} from 'react';
import moment from "moment";
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

  

function EditExercises(props) {
    const id=props.match.params.id;
    const [form] = Form.useForm();
    const [users,setUsers]=useState([]);
    const [redirect,setRrdirect]=useState(false);
    const [updated,setUpdated]=useState(false);
  

  
    const onFinish = (values) => {
        
        axios.post('/exercises/update/'+id,values)
        .then(res=>{
            setUpdated(true);
        })
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  

   
    
    useEffect(() => {
        
        axios.get("/users")
        .then(res=>{
            if(res.data.length>0){
                setUsers(res.data.map(user=>user.username));
            }
            else{
                setRrdirect(true);
            }
        })
        .catch(err => console.log('(Edit exercise)(getUsers)Error: ' + err));
        
        form.setFieldsValue({
            username: props.location.exercise.username,
            description:props.location.exercise.description,
            duration:props.location.exercise.duration,
            date: moment(props.location.exercise.date)
        });


       /* const id=props.match.params.id;
        axios.get(`/exercises/${id}`)
        .then(res=>{
            
        })
        .catch(err => console.log('(Edit exercise)(getExercise)Error: ' + err));*/

    },[]);

   
    
    if (redirect) {
        return <Redirect  to='/user'/>
    }
    if (updated) {
        return <Redirect  to='/'/>
    }
        return(
            <>
               <Col span={22} offset={1}>
                   <h1>Edit Exercise</h1>
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
                            <Select>
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
                            <Input.TextArea  />
                        </Form.Item>
                        <Form.Item label="Duration" name="duration"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input duration !',
                                }
                            ]}
                        >
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item label="Date" name="date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input date !',
                                }
                            ]}
                        >
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



export default EditExercises