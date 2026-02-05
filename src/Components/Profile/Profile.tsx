import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
    const { address } = useAccount()
    const { data, error, status } = useEnsName({ address })

    const cardStyle = {
        padding: '2rem',
        backgroundColor: '#2a2a2a',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '2rem',
        border: '1px solid #3a3a3a',
        textAlign: 'center' as const,
        minWidth: '300px'
    }

    const labelStyle = {
        color: '#888',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '1px'
    }

    const valueStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
        wordBreak: 'break-all' as const
    }

    if (status === 'pending') return <div style={cardStyle}><div style={valueStyle}>Loading...</div></div>
    
    if (status === 'error')
        return (
            <div style={{...cardStyle, borderColor: '#ff4d4f'}}>
                <div style={{color: '#ff4d4f'}}>Error fetching ENS name</div>
                <small>{error.message}</small>
            </div>
        )
        
    return (
        <div style={cardStyle}>
            {data ? (
                <>
                    <div style={labelStyle}>Primary ENS Name</div>
                    <div style={valueStyle}>{data}</div>
                </>
            ) : (
                <>
                    <div style={labelStyle}>ENS Name</div>
                    <div style={{...valueStyle, color: '#888'}}>No ENS name found</div>
                </>
            )}
            <div style={{marginTop: '1.5rem',  borderTop: '1px solid #444', paddingTop: '1rem'}}>
                <div style={labelStyle}>Address</div>
                <div style={{fontSize: '0.9rem', fontFamily: 'monospace', color: '#aaa'}}>
                    {address}
                </div>
            </div>
        </div>
    )
}