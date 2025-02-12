import { Form, Input, Button } from "antd";
import { Link } from "react-router";

import GoogleIcon from '../../assets/Login/GoogleIcon.png';
import FacebookIcon from '../../assets/Login/FacebookIcon.png'

function RegisterPage() {
    const [form] = Form.useForm();

    return (
        <div className="bg-[#f2f7fb]">
            <div className="pt-[54px] w-full max-w-[540px] mx-auto text-center min-h-[100vh] pb-[30px] flex flex-col justify-between">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col bg-[white] rounded-[20px] p-[30px] gap-[40px] text-start">
                        {/* Phần tiêu đề */}
                        <div>
                            <h3 className="text-[24px] leading-[37px] text-[#111] font-bold">
                                Create your account
                            </h3>
                            <div className="text-[#575864] text-[14px] font-normal leading-[20px] ">
                                Enter your personal details to create account
                            </div>
                        </div>
                        {/* Phần form */}
                        <div>
                            <Form layout='vertical' form={form}>
                                <Form.Item
                                    className='font-bold text-[14px] leading-[20px] text-[#111] mb-[10px]'
                                    label="Your fullname"
                                    name="Your fullname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input className='px-[22px] py-[14px] font-normal' />
                                </Form.Item>

                                <Form.Item
                                    className='font-bold text-[14px] leading-[20px] text-[#111] mb-[10px]'
                                    label="Address"
                                    name="Address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your address!',
                                        },
                                    ]}
                                >
                                    <Input className='px-[22px] py-[14px] font-normal' />
                                </Form.Item>

                                <Form.Item
                                    className='font-bold text-[14px] leading-[20px] text-[#111] mb-[10px]'
                                    label="Email address"
                                    name="Email address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email address!',
                                        },
                                    ]}
                                >
                                    <Input className='px-[22px] py-[14px] font-normal' />
                                </Form.Item>

                                <Form.Item
                                    className='font-bold text-[14px] leading-[20px] text-[#111] mb-[10px]'
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className='px-[22px] py-[14px] font-normal' />
                                </Form.Item>

                                <Form.Item
                                    className='font-bold text-[14px] leading-[20px] text-[#111] mb-[10px]'
                                    label="Confirm password"
                                    name="Confirm password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input confirm password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className='px-[22px] py-[14px] font-normal' />
                                </Form.Item>

                                <Form.Item className="mb-0">
                                    <Button className='mt-[1rem] h-[50px] py-[15px] px-[22px] flex items-center justify-center text-[14px] font-bold leading-[20px] w-full' type="primary"
                                        htmlType='submit'
                                    >
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        {/* Phần đăng kí theo bên ngoài */}
                        <div>
                            <div className="text-[#95989d] text-[12px] leading-[15px] mb-[16px] text-center">
                                Or continue with social account
                            </div>
                            <div className='flex gap-[16px]'>
                                <div className='cursor-pointer group hover:bg-[#2275fc] text-[#575864] bg-[#fff] border-[#ecf0f4] h-[50px] py-[15px] px-[22px] flex items-center justify-center text-[14px] gap-[8px] font-bold leading-[20px] border-[1px] border-solid rounded-[12px] w-full '>
                                    <img src={GoogleIcon} alt='Google Icon' className='w-[20px] h-[20px]' />
                                    <span className='text-[#111] group-hover:text-[white]'>
                                        Sign in with Google
                                    </span>
                                </div>

                                <div className='cursor-pointer group hover:bg-[#2275fc] text-[#575864] bg-[#fff] border-[#ecf0f4] h-[50px] py-[15px] px-[22px] flex items-center justify-center text-[14px] gap-[8px] font-bold leading-[20px] border-[1px] border-solid rounded-[12px] w-full'>
                                    <img src={FacebookIcon} alt='Facebook Icon' className='w-[25px] h-[25px]' />
                                    <span className='text-[#111] group-hover:text-[white]'>
                                        Sign in with Facebook
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Phần đã có tài khoản chuyển qua login */}
                        <div className="text-[#575864] text-[14px] font-normal leading-[20px] text-center">
                            You have an account?
                            <Link to="/login" className='text-[#2275fc]'>Login Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterPage;