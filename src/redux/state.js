let state = {
    messagePage: {
        messagesData: [{
            userId: 1, userName: 'Ayaka', messages:
                [{ id: 1, userName: 'Ayaka', message: 'Hello, brother. Can you please ...', side: 'left' },
                { id: 2, userName: 'Ayato', message: 'Ok', side: 'right' }]
        },
        { userId: 2, userName: 'GREATEST Arataki Itto', messages: [{ id: 1, userName: 'GREATEST Arataki Itto', message: 'Yo bro iwanna oadggggkkkl', side: 'left' }] },
        {
            userId: 3, userName: 'Toma', messages:
                [{ id: 1, userName: 'Toma', message: 'Waka, please, dont throw documents around the office...', side: 'left' },
                { id: 2, userName: 'Ayato', message: 'It wasn`t me', side: 'right' },
                { id: 3, userName: 'Ayato', message: 'Taromaru did it', side: 'right' },
                { id: 4, userName: 'Toma', message: 'Are you joking?', side: 'left'  },
                { id: 5, userName: 'Ayato', message: 'y', side: 'right' }]
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