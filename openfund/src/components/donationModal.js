import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const DonationModal = ({ show, handleOnClose }) => {

    const donName = "Test";;
    const [donationForm] = Form.useForm();
    const [donEmail, setDonEmail] = useState("");
    const [donAmount, setDonAmount] = useState("");
    const [donTime, setDonTime] = useState("");

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
        centered
        closable={false}
        visible={show}
        onOk={handleOnClose}
        onCancel={handleOnClose}
    >
        <Form
            layout="vertical"
            form={donationForm}
            onFinish={onFinish}
        >
            <Form.Item
                name="don-initiative"
                label="Initiative"
                valuePropName="don-initiative"
            >
                <Input
                    placeholder="initiative"
                    value={donName} />
            </Form.Item>
            <Form.Item
                name="don-email"
                label="Email"
                valuePropName="don-email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                ]}
            >
                <Input
                    placeholder="email"
                    value={donEmail}
                    onChange={e => setDonEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
                name="don-amount"
                label="Amount"
                valuePropName="don-amount"
                rules={[
                    {
                        required: true,
                        message: 'Please input the donation amount',
                    },
                ]}
            >
                <Input
                    placeholder="amount"
                    value={donAmount}
                    onChange={e => setDonAmount(e.target.value)} />
            </Form.Item>            
            
            <Form.Item>
                <Button type="primary" htmlType="submit">Fund initiative</Button>
            </Form.Item>
        </Form>
    </Modal>
  );
};

export default DonationModal;