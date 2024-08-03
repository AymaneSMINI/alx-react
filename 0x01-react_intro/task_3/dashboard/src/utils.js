function getFullYear() {
    return new Date().getFullYear();
};

const getFooterCopy = (isIndex) => {
    if(isIndex)
        return ('Holberton School')
    return ('Holberton School main dashboard')
}

function getLatestNotification() {
    return (
        "<div><strong>Urgent requirement</strong> - complete by EOD</div>"
    )
};
export {  getFooterCopy,getFullYear, getLatestNotification,
};