
const getTasks = async () => {
    const {data} = await axios.get('/api/v1/tasks');
    return data;
}

const postTask = async (name, id) => {
    const res = await axios.post(`/api/v1/tasks?name=${name}&id=${id}`);
    return res;
}

const deleteTask = async (id) => {
    const res = await axios.delete(`/api/v1/tasks/${id}`);
    return res;
}

const updateTask = async (id) => {
    const res = await axios.put(`/api/v1/tasks/${id}`);
    return res;
}

const insertTasks = (tasks) => {
    for (let i = 0; i < tasks.length; i++){
        if (!document.getElementById(tasks[i].id)){
            document.body.innerHTML += `
            <div class="item-card" id="${tasks[i].id}">
                <div class="name">${tasks[i].name}</div>
                <div class="buttons">
                    <div class="edit-btn" id="${tasks[i].id}"><span class="material-symbols-outlined">
                        edit
                    </span></div>
                    <div class="delete-btn" id="${tasks[i].id}"><span class="material-symbols-outlined">
                        delete
                    </span></div>
                </div>
            </div>
            `;
        }
        
    }

}

const getRandomID = (length) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    var res = "";

    for (let i = 0; i < length; i++){
        const randIndex = Math.floor(Math.random()*chars.length);
        res += chars[randIndex];
    }
    return res;
}

const addEventListeners = () => {
    const editBtns = document.querySelectorAll('.edit-btn');
    const deleteBtns = document.querySelectorAll('.delete-btn');
    const formEle = document.querySelector('#textEle');
    const formBtn = document.querySelector('#submitButton');

    editBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('id');
            updateTask(id).then((res, rej) => console.log(res));
            
        })
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('id');
            deleteTask(id).then((res, rej) => console.log(res));
            document.getElementById(id).remove();

        });
    });

    formBtn.addEventListener('click', () => {
        if (formEle.value){
            postTask(`${formEle.value}`, getRandomID(12))
            .then((res, rej) => console.log(res));
            main();

        }
    })

}

const main = async () => {
    const curTasks = await getTasks();
    insertTasks(curTasks.data);
    addEventListeners();
}

main();




