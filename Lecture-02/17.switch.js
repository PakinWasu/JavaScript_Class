const sta = 700;
switch (sta){
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error!');
        break;
    default:
        console.log('Unknown status');
}