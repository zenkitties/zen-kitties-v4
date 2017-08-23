(function(angular) {
    "use strict";

var kittyApp = angular.module('kittyApp',['ui.router']);
    
kittyApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ==================

        .state('home',{
            url: '/home',
            templateUrl: 'app/views/home/home.html'
        })

        .state('blogs',{
            url: '/blogs',
            templateUrl: 'app/views/blogs/blogs.html'
        })

        .state('projects', {
            url: '/projects',
            templateUrl: 'app/views/projects/projects.html'
        })
});

    
    // CONTROLLERS =======================================
    
    kittyApp.controller('AboutController',['$scope', function($scope){
        $scope.bio = {
                name: 'Nick Myers',
                age: '30',
                birthday: 'February 12, 1987',
                breadcrumb: 'About',
                img: 'img/self-portrait.png'   
        }
    }]);
    
    kittyApp.controller('SkillController',['$scope', function($scope){
        $scope.skills = ['Professional Blogger','Copywriting','SEO','Content Creation','Social Media Marketing','A/B Split Testing','E-Mail Campaigns','List Building','Javascript/jQuery/AngularJS','Custom Wordpress Themes','HTML5','CSS3','SCSS','Bootstrap','Time Delegation','Customer Service/Care','Creative Problem Solving (Google Ninja)','Team Synergist','Photoshop','PHP','Node JS','Affiliate Marketing','Jekyll']
    }]);
    
    kittyApp.controller('BlogsController',['$scope', function($scope){
        $scope.blogs = [
            {
                name: 'Passion Flower Tea Lovers',
                description:'',
                url: 'http://',
                img: ''
            },
            {
                name: 'Art of Emotional Alchemy',
                description: 'This is a peak into my journey as I was learning about emotional resilience and having love and compassion for myself. I write about such themes as Letting Go,Meditation, Self-Love, Relationships, Emotional Resilience, and Emptiness Teaching (The Heart Sutra). It also is the complementary blog that supports the eBook I wrote several years back which discusses how to drop your ideas about yourself and others to meet them more closely where they are in their journey.',
                url: 'http://artofemotionalalchemy.com/',
                img: 'img/emotional-alchemy.png'
            }
        ]
            
    }]);
    
    kittyApp.controller('BreadController',['$scope', function($scope){
        $scope.bread = [
            {
                name: 'About'
            },
            {
                name: 'Projects'
            },
            {
                name: 'Blogs'  
            },
            {
                name: 'Home'
            },
            {
                name: 'Contact Me'
            }
        ]
    }]);
    
    kittyApp.controller('ProjectsController',['$scope', function($scope){
        $scope.projects = [
            {
                name: 'Ryans Run For Autism',
                description: 'This was a fun little project I did for my buddy Ryan as I believe in his passion for supporting one of our local autism centers. Every year he does a run from San Francisco to Fresno to raise funds through donations to raise awareness and support for kids with autism. Check out the site for more information. I used a custom Wordpress theme for this one with some HTML and CSS as well as photo editing in photoshop',
                tags: ['HTML','CSS3','Custom Wordpress','Photoshop'],
                img: 'img/project-images/ryans-run.jpg',
                url: 'http://www.ryansrunforautism.com/'
            },
            {
                name: 'Get Hitting Results Now (Video Sales Funnel)',
                description: 'This is the video sales funnel for the project below this one. This is meant to bring in traffic and send to the form. I used all of the same skills I used below including SCSS for easy variable usage utility for my CSS code. I also used bootstrap for framework/mobile friendliness. This is another project that will be getting tons of traffic sent to it so that large lists can be formed from that traffic. These are things marketers typically use for their projects to warm up cold traffic.',
                tags: ['HTML5','CSS3','Bootstrap','jQuery','Flexbox','SCSS','Node','Gulp'],
                img: 'img/project-images/hpl-video-sales-funnel.jpg',
                url: 'http://gethittingperformancelabresultsnow.com/video-sales-v1/'
            },
            {
                name: 'Get Hitting Results Now (Sales Funnel)',
                description: 'This project was a Landing Page that I did for Hitting Perforamnce Lab for gathering a list of subscribers. I worked a lot with forms in this one in HTML5 and then used jQuery to pre populate data on a redirect to Click Bank after form submission. I utilized SCSS for variables to create better workflow, and bootstrap for my framework for user friendly/device mobility concerns. (scaling). This Landing Page will be one of many for this project that will be seeing tons of traffic and will win over thousands in revenue',
                tags: ['HTML5','CSS3','Bootstrap','jQuery','Flexbox','SCSS','Node','Gulp'],
                img: 'img/project-images/hpl-sales-funnel.jpg',
                url: 'http://gethittingperformancelabresultsnow.com/'
            },
            {
                name: 'Tulare County Child Abuse Prevention Council',
                description: 'This project was a non-profit organization based on child abuse prevention that I designed and completed the full structure from the inside-out. I utilized the Beaver Builder plugin in Wordpress as well as did custom graphics, textures, and headings in photoshop for them. This was mainly done through the Beaver Builder visual editor which is a pain in its own. However using my mastery of CSS3 and PHP as well as child themeing was able to create this beautiful website mostly of my own power. Content is now being maintained by the non-profit and Edit LLC team I was under when I started this project.',
                tags: ['HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','Flexbox','Beaver Builder Plugin','Photoshop','PHP'],
                img: 'img/project-images/tulare-county-child-abuse.jpg',
                url: 'http://tularecountycapc.org/'
            },
            {
                name: 'Shift 3 Technologies',
                description: 'This was a very demanding project that I worked with the development team I am on with Edit LLC. My part had a lot to do with custom modals done in jQuery, and custom styling of those modals in HTML5 and CSS3. I also helped in other styling aspects of this Custom Wordpress theme as well as utilizing Flexbox to allow scaleability and mobile friendly versions of this website. This was a big project for one of Fresnos biggest tech companies in the valley.',
                tags: ['HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','Flexbox'],
                img: 'img/project-images/shift3.jpg',
                url: 'http://shift3tech.com/'
            },
            {
                name: 'Little Leaf Tea',
                description: 'This was a project that was done for a friend who owns one of Fresnos best local Tea spots in town. I find myself often coming here for some peace and quiet as well as to enjoy so delicious tea blends with friends. This was a custom wordpress theme made from scratch by yours truly which I utilized PHP, Bootstrap, SCSS, CSS3 and jQuery.',
                tags: ['PHP','HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','mySQL'],
                img: 'img/project-images/little-leaf-tea.jpg',
                url: 'http://littleleaftea.com/'
            },
            {
                name: 'Red Wave Communications',
                description: 'This was one of the main projects I did for the Bitwise Cohort where we got real developer training by doing work for real clients. This was my first real project working on a team of two. We created this Word Press Custom theme from the ground up based off a loose framework visual. We integrated a number of wp-plugins as well as backend PHP knowledge and loops to complete it.',
                tags: ['PHP','HTML5','CSS3','Bootstrap','Custom Wordpress','jQuery','mySQL'],
                img: 'img/project-images/red-wave-communication.jpg',
                url: 'http://www.redwavecomm.com/'
            },
            {
                name: 'Hitting Performance Lab',
                description: 'This project was also done using Wordpress. Although I didn\'t do the theme myself, my part in the project was to do modifications, fixes, and upkeep. Some of the things I worked on were the back-to-top button, social media buttons up top (and mobile), fixes to the newletter submit button, advertisement section on the right, and mobile friendliness.',
                tags: ['HTML5','CSS3','SCSS','Custom Wordpress','jQuery'],
                img: 'img/project-images/hpl.jpg',
                url: 'http://www.hittingperformancelab.com/'
            },
            {
                name: 'Etna Sample Site (Dev Challenge)',
                description: 'This was a developers challenge I did for a company out of SLO. They gave me a PSD file that they wanted converted into an HTML5 project using the skills I had at hand. They gave me 4 days to complete the project for both desktop and mobile friendly versions of the site.',
                tags: ['HTML5','CSS3','SCSS','Bootstrap','jQuery','AngularJS'],
                img: 'img/project-images/etna-sample-site.jpg',
                url: 'http://zenkitties.github.io/etna-sample-project/'
            },
            {
                name: 'Windmere Gardens (Dev Challenge)',
                description: 'Another recent developers challenge put on by Edit LLC for me to do. I had 4 days to output this bad boy (mobile friendly version as well). I had to take Windermere Gardens home page which was done in WP and re-create it using my frontend web developing skills in bootstrap. I\'ll let you in on a little secret, it got me the job. ;)',
                tags: ['HTML5','CSS3','SCSS','Bootstrap','jQuery','AngularJS'],
                img: 'img/project-images/widmerl.jpg',
                url: 'http://zenkitties.github.io/windermere-gardens/'
            },
        ]
    }]);
    
    kittyApp.controller('ContactFormController',['$scope', function($scope){
        $scope.emailAddress = 'zenfootphilosopher@gmail.com';
            
        $scope.submit = " ";
        
        $scope.clearForm = function(){
            $scope.firstName= "",
            $scope.lastName= "",
            $scope.from= "",
            $scope.subject= "",
            $scope.comments= ""
            
            $scope.form = form.$pristine;
        };

    }]);

    // DIRECTIVES ========================================
    
    kittyApp.directive('contact',function(){
        return {
            restrict: 'EAC',
            templateUrl: 'app/views/includes/contact.html'
        }
    });
    
    kittyApp.directive('skillsetDiv',function(){
        return {
            restrict: 'EAC',
            templateUrl: 'app/views/includes/skillset.html'
        }
    });
    
    kittyApp.directive('breadCrumbs',function(){
        return {
            restrict: 'EAC',
            templateUrl: 'app/views/includes/breadcrumb.html'
        }
    });
    
    kittyApp.directive('toTop',function(){
        return {
            restrict: 'EAC',
            templateUrl: 'app/views/includes/back-to-top.html'
        }
        
    });
    
})(window.angular);