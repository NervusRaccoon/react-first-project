import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    
    if (props.users.length === 0)
    {
        props.setUsers([{ id: 0, photoUrl: 'https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq', name: 'Darya', status: 'Hello!', location: { sity: 'Minsk', country: 'Belarus' }, isFollowed: false },
        { id: 1, photoUrl: 'https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq', name: 'Yelana', status: 'Hi!', location: { sity: 'Yoshkar-Ola', country: 'Russia' }, isFollowed: true }
        ]);
    }

    return <div>
        {
            props.users.map(x => <div key="x.id">
                <span>
                    <div>
                        <img src={x.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {
                            x.isFollowed
                                ? <button onClick={() => props.unfollow(x.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(x.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{x.name}</div>
                        <div>{x.status}</div>
                    </span>

                    <span>
                        <div>{x.location.country}</div>
                        <div>{x.location.sity}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;