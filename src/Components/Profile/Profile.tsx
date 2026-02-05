import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
    const { address } = useAccount()
    const { data, error, status } = useEnsName({ address })

    const cardStyle = {
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        marginTop: '2rem',
        border: '1px solid #e2e8f0',
        textAlign: 'center' as const,
        minWidth: '300px'
    }

    const labelStyle = {
        color: '#718096',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '1px'
    }

    const valueStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1a202c',
        wordBreak: 'break-all' as const
    }

    if (status === 'pending') return <div style={cardStyle}><div style={valueStyle}>Loading...</div></div>
    
    if (status === 'error')
        return (
            <div style={{...cardStyle, borderColor: '#e53e3e'}}>
                <div style={{color: '#e53e3e'}}>Error fetching ENS name</div>
                <small style={{color: '#718096'}}>{error.message}</small>
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
                    <div style={{...valueStyle, color: '#a0aec0'}}>No ENS name found</div>
                </>
            )}
            <div style={{marginTop: '1.5rem',  borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                <div style={labelStyle}>Address</div>
                <div style={{fontSize: '0.9rem', fontFamily: 'monospace', color: '#4a5568'}}>
                    {address}
                </div>
            </div>
        </div>
    )
}