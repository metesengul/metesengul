<template>
  <v-container>

    <br>
    <span class="display-3">Hello,</span>
    
    <v-row dense class="my-4">
      
      <v-col cols=12 sm=6>

        <p>
          I'm Mete. I am a junior computer engineer at Istanbul University, 
          studying <span class="primary--text">Machine Learning</span> and <span class="secondary--text">Artifical Neural Networks.</span>
          
        </p>

      </v-col>

      <v-col cols=12 sm=6>

        <p>
          Developed many projects on Supervised Learning, 
          earned certificates on Deep Neural Networks and 
          created my own optimization algorithms.
          Participated in HashCode, Kaggle and HackerRank competitions.
        </p>

      </v-col>

    </v-row>

    <span class="display-3">Experience</span>
    <v-row dense class="my-4">

      <v-col cols=12 sm=6 md=4 lg=3 xl=2 v-for="(exp, i) in experience" :key="i">
        
        <v-card>
          <v-card-text>
            <div>{{exp.company}}</div>
            <p class="title text--primary">
              {{exp.title}}
            </p>
            <p>{{exp.date}}</p>
            <div class="text--primary">
              {{exp.text}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="accent"
              :href="exp.link"
            >
              {{exp.button}}
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

    </v-row>

    <span class="display-3">Projects</span>
    
    <v-row dense class="my-4">
      
      <v-col cols=12 sm=6 md=4 lg=3 xl=2 v-for="(project, i) in projects" :key="i">
        <v-card>
          <v-img
            :src="project.image"
            aspect-ratio="1.5"
          ></v-img>
          <v-card-text>
            <p class="title text--primary">{{project.title}}</p>
            <p>{{project.date}}</p>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              text
              color="accent"
              :href="project.link"
            >
              View Project
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

    <span id="skills" class="display-3">Skills</span>

    <v-row dense class="my-4">

      <v-col cols=12 sm=6 md=4 lg=3 xl=2 v-for="(skill, i) in skills" :key="i">
        
        <v-card>

          <v-card-title >
            {{skill}}
          </v-card-title>

        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({

    slides: [
      {
        text:'Microservices',
        color:'indigo'
      },
      {
        text:'Machine Learning',
        color:'warning'
      },
      {
        text:'Web Development',
        color:'pink darken-2'
      },
      {
        text:'Python',
        color:'red lighten-1'
      },
      {
        text:'Google Cloud',
        color:'deep-purple accent-4'
      },
    ],

    skills: [
      "Computer Vision",
      "Image Segmentation", "Object Detection",
      "SVM", 
      "K-Nearest Neighbors",
      "Decision Trees",
      "Regression Models",
      "Convolutional Networks",
      "Recurrent Networks",
      "Python",
      "OpenCV", "Pandas",
      "Scikit-Learn",
      "Tensorflow",
      "Flask",
      "Google Cloud Platform",
      "Firebase",
      "Git", "Docker", "C++", "Linux", "Vue.js", "Unity",
    ],

    experience: [
      {
        company: '4D Sight',
        title: 'Computer Vision Engineer',
        date: 'Apr 2019 – Present',
        link: 'https://www.4dsight.com/',
        button: 'Website',
        text:
          `Worked on integrating ads into live stream gameplays as if they are part of
          the content, making ad formats nonintrusive and authentic. Used Tensorflow,
          OpenCV, deep segmentation models and feature extraction methods to place
          advertisements in realtime. Helped the computer vision team with preprocessing and researching. Developed a program using Unity and C# to collect
          the necessary data.`
      },
      {
        company: 'Iceberg Technologies',
        title: 'Deep Learning Researcher',
        date: 'Jun 2019 – August 2019',
        link: 'https://iceberg-technologies.com/',
        button: 'Website',
        text:
          `Worked on locating Diabetic Retinopathy (also known as diabetic eye
          disease) lesions in fundus images. Used state-of-the-art convolutional
          neural networks to find microaneurysms with better accuracy and precision.
          Implemented research papers and learned leadership.`
      },
      {
        company: 'Istanbul University',
        title: 'Computer Engineering Undergraduate',
        date: 'September 2017 – Present',
        link: 'https://istanbulc.edu.tr/en/_',
        button: 'Website',
        text:
          `Junior, current GPA: 3.32`
      },  
      {
        company: 'Coursera',
        title: 'Neural Networks and Deep Learning Certification',
        date: 'June 2018 - July 2018',
        link: 'https://www.coursera.org/account/accomplishments/certificate/PEUQLHY9RNBC',
        button: 'Certificate',
        text:
          `Neural Networks and Deep Learning by deeplearning.ai on Coursera. Certificate earned at Tuesday, July 3, 2018 11:18 AM GMT`
      },     
    ],

    projects: [
      {
        title:'Generating music using LSTM Networks and Keras Functional API',
        image:'https://www.researchgate.net/profile/Wentao_Zhu4/publication/283748925/figure/fig1/AS:613966967484434@1523392540658/The-proposed-deep-LSTM-network-with-three-LSTM-layers-and-two-feedforward-layers-For.png',
        link:'https://colab.research.google.com/drive/1t-1-bULaPG5uEhj6-3SMHzUj1OZ91SWS',
        date: 'October 2018 – December 2018'
      },
      {
        title:'Iris Classification Web Application',
        image:'https://seedsnpots.com/wp-content/uploads/2018/12/iris-professor-blaw.jpg',
        link:'https://metesengul-iris-classification.web.app/',
        date: 'October 2019 – November 2019'
      },
      {
        title:'Training a Convolutional Neural Network on the MNIST dataset',
        image:'https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Plot-of-a-Subset-of-Images-from-the-MNIST-Dataset.png',
        link:'https://colab.research.google.com/drive/1GNGpq5KxjIBqCE9lQWZo2jpfg0dnjJ2L#scrollTo=EX8z3w-4tdux',
        date: 'May 2018 – July 2018'
      },
      {
        title:'Sentiment analysis of IMDB movie reviews using LSTM Recurrent Neural Networks',
        image:'https://www.listchallenges.com/f/lists/62d312cf-d718-4513-a842-ecc04637c55a.jpg',
        link:'https://colab.research.google.com/drive/1N3He3BxOW6qyWTHbib2YmvdCrNllztW9#scrollTo=FYJ_sJgNRf2_',
        date: 'March 2017 – May 2017'
      },
    ],

  }),
};
</script>