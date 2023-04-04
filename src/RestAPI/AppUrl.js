class AppUrl {

    static BaseURL = 'http://127.0.0.1:8000/api';
    //static BaseURL = 'https://smuctapi.tech2morrow.xyz/api';

     static HomeTopTitle = this.BaseURL+'/homepage/title';
     static HomeTechDesc = this.BaseURL+'/techhome';
     static TotalHomeDetails = this.BaseURL+'/totalhome';
     static HomeVideo = this.BaseURL+'/home/video';

     static ProjectDetails = this.BaseURL+'/ProjectDetails/';
     static ProjectAll = this.BaseURL+'/ProjectsAll';
     static ProjectHome = this.BaseURL+'/ProjectsHome';
     static Services = this.BaseURL+'/services';

     static Information = this.BaseURL+'/Information';
     static FooterData = this.BaseURL+'/Footerdata';
     static CourseDetails = this.BaseURL+'/coursedetails';
     static CourseAll = this.BaseURL+'/CoursesAll';
     static CourseHome = this.BaseURL+'/CoursesHome';

     static ContactSend = this.BaseURL+'/ContactSend';
     static ClientReview = this.BaseURL+'/ClientReview';
     static ChartData = this.BaseURL+'/chartdata';
  
}

export default AppUrl
