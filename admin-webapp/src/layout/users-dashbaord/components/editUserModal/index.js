import React, {useEffect, useState} from "react";
import {Modal, Select, Tag} from 'antd';
import './styles.css'
import {changeUsersPermission} from "../../../../webapi/users";

export const EditUserModal = ({user, visible, setVisible, onUserEdit}) => {

    const [newUserPermission, setNewUserPermission] = useState(user?.userType);

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

    const onUserEditSave = (newUserPermission) => {
        onUserEdit(newUserPermission);
        console.log(user);
        changeUsersPermission({body: {name: user.name, email: user.email, role: newUserPermission, is_banned: false},
                                    userId: user.key}).then(() => {
            setVisible(false);
        })
    }

    useEffect(() => {
        setNewUserPermission(user?.userType)
    }, [user])

    return (
        <Modal okText={'Save'} onOk={() => onUserEditSave(newUserPermission)} visible={visible} title={"Edit user's permission"} onCancel={() => setVisible(false)}>
            <div className={"user-info-container"}>
                <div className={'user-edit-modal-text'}>Name: <strong className={'user-edit-modal-info'}> {user?.name}</strong></div>
                <div className={'user-edit-modal-text'}>Email: <strong className={'user-edit-modal-info'}> {user?.email}</strong></div>
                <div className={'user-edit-modal-text'}>Current permission:
                    <Tag className="text-capitalize user-edit-permission-tag"
                         color={getColorByStatus(user?.userType)}><strong>{user?.userType}</strong></Tag>
                </div>
            </div>
            <div className={"user-edit-permission-container"}>
                <div className={'user-edit-modal-text'}>Change current permission:</div>
                <Select onChange={(value) => setNewUserPermission(value)} className={'user-edit-permission-component'} defaultValue={user?.userType === 'pacient' ? 'user' : user?.userType}>
                    <Select.Option value={'admin'}>
                        Admin
                    </Select.Option>
                    <Select.Option value={'doctor'}>
                        Doctor
                    </Select.Option>
                    <Select.Option value={'user'}>
                        Pacient
                    </Select.Option>
                </Select>
            </div>
        </Modal>
    )
}
