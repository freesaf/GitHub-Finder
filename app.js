// Instantiate GitHub
const gitHub = new GitHub;

// Instantiate UI
const ui = new UI;

// Search input
const search = document.querySelector('.form-control');
search.addEventListener('keyup', init);

function init(e) {
    //Get input text
    const userText = e.target.value;

    if (userText !== '') {
        const response = gitHub.getUser(userText);
        response.profile
        .then(d => {
            if (d.message === "Not Found") {
                // show an alert user not found
                ui.showAlert(`the user ${search.value} doesn't exist`)
            } else {
                //Display user profile on the page
                ui.showUser(d);
                response.repo
                .then(r=>ui.showRepo(r));

                
            }
        })     
        
            


    } else {
        //clear the profile in UI
        ui.clearUI()
    }
}