let state = {
    messagePage: {
        messagesData: [{
            userId: 1, userName: 'Ayaka', messages:
                [{ id: 1, userName: 'Ayaka', message: 'Hello, brother. Can you please ...' },
                { id: 2, userName: 'Ayato', message: 'Ok' }]
        },
        { userId: 2, userName: 'GREATEST Arataki Itto', messages: [{ id: 1, userName: 'GREATEST Arataki Itto', message: 'Yo bro iwanna oadggggkkkl' }] },
        {
            userId: 3, userName: 'Toma', messages:
                [{ id: 1, userName: 'Toma', message: 'Waka, please, dont throw documents around the office...' },
                { id: 2, userName: 'Ayato', message: 'It wasn`t me. Taromaru did it' },
                { id: 3, userName: 'Toma', message: 'Are you joking?' },
                { id: 4, userName: 'Ayato', message: 'y' }]
        }]
    },

    profilePage: {
        posts: [{ userName: 'Ayaka', message: 'Beautiful!', likesCount: '20.9k' },
        { userName: 'GREATEST Arataki Itto', message: 'Go bugs fight! Today Itto goes to WIN!!!!', likesCount: 1 },
        { userName: 'Ayato', message: 'I think I forgot something. Hm...', likesCount: '1k' },
        { userName: 'GREATEST Arataki Itto', message: 'IM WAITING FOR YOU ALL DAY!!!!!!!!!!!!! WHERE ARE YOU?!?!?!?!%@%$^@^$^@$&@$*$@', likesCount: 1 }]
    }
}

export default state;