import { InitiateTransferApiResponse, InitiateTransferProps, MonnifyUserTokenResponse, ReservedAccountApiResponse, ReservedAccountProps } from "./types";

export const baseURL = process.env.NEXT_MONNIFY_BASE_URL;
export const monnifyAPIKey = process.env.NEXT_MONNIFY_API_KEY;
export const monnifySecretKey = process.env.NEXT_MONNIFY_SECRET_KEY;
export const monnifyContractCode = process.env.NEXT_MONNIFY_CONTRACT_CODE;

export async function getUserMonnifyToken(): Promise<MonnifyUserTokenResponse | undefined> {
    
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(monnifyAPIKey + ':' + monnifySecretKey));
    
    const requestOptions = {
        method: 'POST',
        headers: headers,
    };
    
    try {
        const res = await fetch(baseURL + '/auth/login', requestOptions)
        if (!res.ok) {
            throw new Error('Error fetching user')
        }
        const data = await res.json()
        return { data, status: res.status }
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export const getReservedAccount = async (payload: ReservedAccountProps): Promise<ReservedAccountApiResponse | undefined> => {
    const token = (await getUserMonnifyToken())?.data?.responseBody?.accessToken
    const headers: HeadersInit = new Headers({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    });

    payload.contractCode = monnifyContractCode as string

    try {
        const res = await fetch(baseURL+'/bank-transfer/reserved-accounts', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
          })

          console.log(res.statusText, res.status,)
          
          if (!res.ok) {
            console.error('Error fetching data')
            throw Error
        }
        const data = await res.json()
        return data
    } catch (error: any) {
        console.error(error)
    }
}

export const initiateTransfer = async (payload: InitiateTransferProps): Promise<InitiateTransferApiResponse | undefined> => {
    const token = (await getUserMonnifyToken())?.data?.responseBody?.accessToken
    const headers: HeadersInit = new Headers({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    });

    payload.contractCode = monnifyContractCode as string

    try {
        const res = await fetch(baseURL+'/merchant/transactions/init-transaction', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        })

        console.log(res.statusText, res.status)

        if (!res.ok) {
            console.error('Error fetching data')
            throw Error
        }
        const data = await res.json()
        return data
    } catch (error: any) {
        console.error(error)
    }
}