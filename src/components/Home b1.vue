<template>
  <v-container>

    <span class="display-1">Experience</span>
    <v-row dense>

      <v-col cols=3>
        
        <v-card>
          <v-card-text>
            <div>4D Sight</div>
            <p class="display-1 text--primary">
              Computer Vision Engineer
            </p>
            <p>Apr 2019 – Present</p>
            <div class="text--primary">
              Worked on integrating ads into live stream gameplays as if they are part of
              the content, making ad formats nonintrusive and authentic. Used Tensorflow,
              OpenCV, deep segmentation models and feature extraction methods to place
              advertisements in realtime. Helped the computer vision team with preprocessing and researching. Developed a program using Unity and C# to collect
              the necessary data.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="blue"
            >
              Website
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

      <v-col cols=3>

        <v-card>
          <v-card-text>
            <div>Iceberg Technologies</div>
            <p class="display-1 text--primary">
              Deep Learning Researcher
            </p>
            <p>Jun 2019 – Present</p>
            <div class="text--primary">
              Worked on locating Diabetic Retinopathy (also known as diabetic eye
            disease) lesions in fundus images. Used state-of-the-art convolutional
            neural networks to find microaneurysms with better accuracy and precision.
            Implemented research papers and learned leadership.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="secondary"
            >
              Website
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>




    </v-row>

    <br>

    <span id="skills" class="display-1">Skills</span>
    <v-row dense>
      <v-col>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{ slide }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row dense>


      <v-col cols=3 v-for="(skill, i) in skills" :key="i">
        
        <v-card>
          <v-card-text class="text-center">
            <v-icon x-large :class="skill.color">{{skill.icon}}</v-icon>
          </v-card-text>
          <v-card-title class="justify-center">
            {{skill.title}}
          </v-card-title>
          <v-card-text>
            {{skill.text}}
          </v-card-text>
        </v-card>

      </v-col>


    </v-row>

    


  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'Microservices',
      'Machine Learning',
      'Web Development',
      'Python',
      'Google Cloud',
    ],
    skills: [
      {
        icon: 'mdi-language-python',
        color: 'indigo--text text--lighten-2',
        title: 'Python',
        text:
          `Python is the perfect choice for running your machine learning models on the cloud. 
          Flask lets ML models predict and respond to HTTP requests using REST APIs.`
      },
      {
        icon: 'mdi-vuejs',
        color: 'green--text text--lighten-2',
        title: 'Vue',
        text:
          `Vue handles the web frontend and data bindings to create a modern user interface.
          It communicates with Firestore and Firebase Storage to deal with user data. 
          Addons such as Vuetify and Axios allows fast development.`
      },
      {
        icon: 'mdi-firebase',
        color: 'amber--text text--lighten-2',
        title: 'Firebase',
        text:
          `Firebase hosts the frontend code and deals with databases, storage, and authentication. 
          It is seamless with Google Cloud services.`
      },
      {
        icon: 'mdi-math-integral',
        color: 'red--text text--lighten-2',
        title: 'Machine Learning',
        text:
          `Understand your data and make predictions using decision trees, SVMs, and other machine learning algorithms. 
          Deploy your Tensorflow or Scikit-Learn models on a Flask backend with Docker.`
      },
      {
        icon: 'mdi-brain',
        color: 'blue--text text--lighten-2',
        title: 'Deep Learning',
        text:
          `You can use state-of-the-art deep learning models for your computer vision and natural language processing tasks.
           Keras allows for rapid research and development.`
      },
      {
        icon: 'mdi-server',
        color: 'blue-grey--text text--lighten-2',
        title: 'Google Cloud',
        text:
          `Every service is scalable in the cloud. 
          Serverless solutions like Cloud Run, Kubernetes, Cloud Functions and App Engine make backend management very simple and lowers the cost of your projects.`
      }
    ],
  }),
};
</script>
