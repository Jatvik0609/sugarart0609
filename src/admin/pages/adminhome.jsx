import './adminhome.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [USER, setUsers] = useState([]);
    const [BILL, setBill] = useState([]);

    const [showData, setShowData] = useState(false);
    const [showBill, setShowBill] = useState(false);

    const [currentPageUser, setCurrentPageUser] = useState(0);
    const [currentPageBill, setCurrentPageBill] = useState(0);

    const rowsPerPage = 3;


    const navigate = useNavigate();
    const callProductPage = async () => {
        try {
            const res = await axios.post('/admin', {
                token: localStorage.getItem('token')
            });


            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        }
        catch (err) {
            console.log(err);
            navigate("/login");
        }
    }

    useEffect(() => {
        callProductPage();
    }, [])

    useEffect(() => {
        axios.get('/getUsers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        axios.get('/getBill')
            .then(bill => setBill(bill.data))
            .catch(err => console.log(err))
    }, []);

    const handleUserClick = () => {
        setShowData(true);
        setShowBill(false);
    };

    const handleBillClick = () => {
        setShowData(false);
        setShowBill(true);
    };

    const handleUserNextPage = () => {
        if ((currentPageUser + 1) * rowsPerPage < USER.length) {
            setCurrentPageUser(currentPageUser + 1);
        }
    };

    const handleUserPrevPage = () => {
        if (currentPageUser > 0) {
            setCurrentPageUser(currentPageUser - 1);
        }
    };

    const handleBillNextPage = () => {
        if ((currentPageBill + 1) * rowsPerPage < BILL.length) {
            setCurrentPageBill(currentPageBill + 1);
        }
    };

    const handleBillPrevPage = () => {
        if (currentPageBill > 0) {
            setCurrentPageBill(currentPageBill - 1);
        }
    };

    const renderUserRows = USER.slice(
        currentPageUser * rowsPerPage,
        (currentPageUser + 1) * rowsPerPage
    );

    const renderBillRows = BILL.slice(
        currentPageBill * rowsPerPage,
        (currentPageBill + 1) * rowsPerPage
    );

    return (
        <div className='admin_header'>
            {showData && (
                <div className='data'>
                    <div className="pagination">
                        <Icon
                            icon="mdi:code-less-than"
                            width={30}
                            onClick={handleUserPrevPage}
                            className={currentPageUser === 0 ? 'disabled' : ''}
                        />
                    </div>
                    <table id="customers">
                        <thead>
                            <h6>User Database</h6>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUserRows.map(USER => (
                                <tr key={USER.id}>
                                    <td>{USER.name}</td>
                                    <td>{USER.email}</td>
                                    <td><p>{USER.date}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <Icon
                            icon="mdi:code-greater-than"
                            width={30}
                            onClick={handleUserNextPage}
                            className={
                                (currentPageUser + 1) * rowsPerPage >= USER.length
                                    ? 'disabled'
                                    : ''
                            }
                        />
                    </div>
                </div>
            )}

            {showBill && (
                <div className='Bill'>
                    <div className="pagination">
                        <Icon
                            icon="mdi:code-less-than"
                            width={30}
                            onClick={handleBillPrevPage}
                            className={currentPageBill === 0 ? 'disabled' : ''}
                        />
                    </div>
                    <table id="customers">
                        <thead>
                            <h6>Bill Database</h6>
                            <tr>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>ZipCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderBillRows.map(BILL => (
                                <tr key={BILL.id}>
                                    <td>{BILL.fullName}</td>
                                    <td>{BILL.email}</td>
                                    <td><p>{BILL.address}</p></td>
                                    <td>{BILL.city}</td>
                                    <td>{BILL.state}</td>
                                    <td>{BILL.zipCode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <Icon
                            icon="mdi:code-greater-than"
                            width={30}
                            onClick={handleBillNextPage}
                            className={
                                (currentPageBill + 1) * rowsPerPage >= BILL.length
                                    ? 'disabled'
                                    : ''
                            }
                        />
                    </div>
                </div>
            )}

            <div className='white_leftbanner'>
                <div className='admin'>
                    <Icon icon="ri:admin-fill" width={30} />
                    <h1>Admin</h1>
                </div>

                <div className='insideText'>
                    <div onClick={handleUserClick}>
                        <Icon icon="mdi:user" width={30} />
                        <p>USER</p>
                    </div>

                    <div onClick={handleBillClick}>
                        <Icon icon="icon-park-outline:order" width={30} />
                        <p>BILLS</p>
                    </div>
                </div>
                <h6>ADMIN SITE</h6>
            </div>
        </div>
    );
}

export default Admin;