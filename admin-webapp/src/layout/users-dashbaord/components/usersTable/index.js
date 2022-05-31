import React, {useEffect, useState} from "react";
import {Table, Button, Tag} from "antd";
import {EditUserModal} from "../editUserModal";
import './styles.css'
import {getUsers} from "../../../../webapi/users";

export const UsersTable = () => {

    const [tableData, setTableData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [userToEdit, setUserToEdit] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const getColorByStatus = (status) => {
        switch (status) {
            case 'doctor': {
                return 'cyan'
            }
            case 'admin': {
                return 'black'
            }
        }
    }

    const onUserEditButtonClick = (user) => {
        setUserToEdit(user);
        setModalVisible(true);
    }

    const onUserEdit = (newPermission) => {
        const newTableData = tableData.map((user) => {
            if (user.key === userToEdit.key) {
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
                return <Button type={'secondary'} onClick={() => onUserEditButtonClick(element)}>Edit</Button>
            }
        }
    ];

    useEffect(() => {
        getUsers().then(res => {
            setResponse(res);
            setError(null)
        }).catch(e => {
            setResponse(null);
            setError(e)
        })
    }, [])

    useEffect(() => {
        if(response) {
            let data = response.map((item) => {
                return {
                    key: item.id,
                    name: item.name,
                    email: item.email,
                    userType: item.role === 'user' ? 'pacient' : item.role
                }
            });
            setTableData(data)
        }
    }, [response])

    return (
        <div className="table-container">
            <Table className={'table-component'} size={'small'} columns={columns} dataSource={tableData}
                   pagination={{position: ['bottomCenter']}}/>
            <EditUserModal visible={modalVisible} setVisible={setModalVisible} user={userToEdit}
                           onUserEdit={onUserEdit}/>
        </div>
    )
}