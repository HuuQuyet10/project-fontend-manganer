export function formatDate(dateString) {
    const date = new Date(dateString);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}
export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
export const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export function formatPaturl(pathurl) {
    const parts = pathurl.split("/");
    const desiredPart = parts[3];
    return desiredPart;
}


const ethPrice = 1.868;
export function priceETH(ethAmount) {
    const usdAmount = ethAmount * ethPrice;
    return usdAmount;
}