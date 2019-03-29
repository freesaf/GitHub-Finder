class GitHub {
    constructor(){
        this.client_id = '66aef73f814a096eea68';
        this.client_secret = 'd8e23385019ede3b60e8ad39baa68890475f22ca';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    //Get user
    // async getUser(user){
    //   const newUser =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //   const response = await newUser.json();
    //   return {
    //       response
    //     };
    // }

    getUser(user){
        const profile = fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .then(res=>res.json())

        const repo = fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .then(res=>res.json())


        return {
            profile,
            repo
        }

        
    }

}