import axios from 'axios';
import IDataList from '../models/IDataList';

const getDataFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:4000/items`)
            .then( response => response.data )
};

const pushDataFromUser = ( newpurchase : Omit<IDataList, 'id'> ) => {
    return axios.post<IDataList>(
        `http://localhost:4000/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
};

export { 
    getDataFromServer,
    pushDataFromUser 
}