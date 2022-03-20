import SnackOrBoozeApi from "./Api";



// used to create a food or drink item


const createItem = async (data) => {
    const menu = data.menu;
    // data.id = data.itemName.toLowerCase();
    // console.log(data);
    if(menu === 'snacks'){
        await SnackOrBoozeApi.createSnack(data);
    }else{
        await SnackOrBoozeApi.createDrink(data);
    }
}


export default createItem;