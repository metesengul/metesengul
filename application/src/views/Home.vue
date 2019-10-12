<template>

    <div>

      <About></About>

      <Cards
        :items="skills"
        :title="'A modern way to create fast and reliable products'"
        :subtitle="''"
      >
      </Cards>

      <Cards
        :items="people"
        :title="'People I worked with'"
        :subtitle="''"
      >
      </Cards>

      <Contact></Contact>

    </div>

</template>

<script>
import Cards from '@/components/Cards'
import Contact from '@/components/Contact'
import About from '@/components/About'

export default {

  data: () => ({

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

    people: [
      {
        title: '4D Sight',
        link: { href: 'https://4dsight.com/#!/', text: 'Website' },
        text:
          `Worked on integrating ads into live stream gameplays as if they are part of
          the content, making ad formats nonintrusive and authentic. Used Tensorflow,
          OpenCV, deep segmentation models and feature extraction methods to place
          advertisements in realtime. Helped the computer vision team with preprocessing and researching. Developed a program using Unity and C# to collect
          the necessary data.`
      },

      {
        title: 'Iceberg Technologies',
        link: { href: 'https://iceberg-technologies.com/', text: 'Website' },
        text:
          `Worked on locating Diabetic Retinopathy (also known as diabetic eye
          disease) lesions in fundus images. Used state-of-the-art convolutional
          neural networks to find microaneurysms with better accuracy and precision.
          Implemented research papers and learned leadership.`
      }

    ]
  }),

  components: {
    Cards,
    Contact,
    About
  }
}
</script>
