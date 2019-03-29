class UI{
    constructor(){
        this.profile = document.getElementById('profile');

    }
    showUser(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-3" src="${user.avatar_url}">
                <a href = "${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary p-2">Public Repo: ${user.public_repos}</span>
                    <span class="badge badge-info p-2">Public Gist: ${user.public_gists}</span>
                    <span class="badge badge-secondary p-2">Followers: ${user.followers}</span>
                    <span class="badge badge-success p-2">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group bg-light">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>

                    </ul>
                </div>
            </div> 
        </div>
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos"></div>
        `
    }
    showRepo(repos){
        let output='';
         repos.forEach(repo => {

           output += ` 
           <div class="card card-body mb-2">
               <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-success p-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-info p-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-2">Forks: ${repo.forks_count}</span>
                    </div>
               </div>
            </div>`
        });

        document.getElementById('repos').innerHTML = output;
    }

    showAlert(msg){
        const alrt = document.querySelector(".alert");
        if(!alrt){
             //Get parent
        const container = document.querySelector('.search');
        
        // show alert message
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="alert alert-dismissible alert-danger">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        ${msg}</div>`;

        container.appendChild(div);
        //clear ui
        this.clearUI();
        }else{
            alrt.remove();
        }

       
    }

    clearUI(){
        this.profile.innerHTML = '';
    }
}