import React, {useEffect, useState} from "react";
import {Table, Button, Tag} from "antd";
import {EditUserModal} from "../editUserModal";
import './styles.css'

export const UsersTable = () => {

    const [tableData, setTableData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [userToEdit, setUserToEdit] = useState(null);

    const getColorByStatus = (status) => {
        switch (status) {
            case 'pacient': {
                return 'default'
            }
            case 'doctor': {
                return 'cyan'
            }
            case 'admin': {
                return 'black'
            }
            case 'forbidden': {
                return 'red'
            }
        }
    }

    const onUserEditButtonClick = (userId) => {
        setUserToEdit(tableData[userId]);
        setModalVisible(true);
    }

    const onUserEdit = (newPermission) => {
        const newTableData = tableData.map((user) => {
            if(user.key === userToEdit.key){
                return {...user, userType: newPermission};
            }
            return user;
        })

        setTableData(newTableData);
        setModalVisible(false);
    }

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'User type',
            dataIndex: 'userType',
            align: 'center',
            render: status => {
                return <Tag className="text-capitalize table-permission"
                     color={getColorByStatus(status)}><strong>{status}</strong></Tag>
            }
        },
        {
            title: 'Actions',
            align: 'center',
            render: (element) => {
                return <Button type={'secondary'} onClick={() => onUserEditButtonClick(element.key)}>Edit</Button>
            }
        }
    ];

    useEffect(() => {

        let data = [];
        for (let i = 0; i < 25; i++) {
            data.push({
                key: i,
                name: `Ionel Olteanu ${i}`,
                email: 'olteanu1@gmail.com',
                userType: `admin`,
            });
        }
        setTableData(data);

    }, [])

    return (
        <div className="table-container">
            <Table className={'table-component'} size={'small'} columns={columns} dataSource={tableData}
                   pagination={{ position: ['bottomCenter']}}/>
            <EditUserModal visible={modalVisible} setVisible={setModalVisible} user={userToEdit} onUserEdit={onUserEdit}/>
        </div>
    )
}