const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.classList.contains('skill-pill')) {
        const pills = e.target.closest('.skill-pills').querySelectorAll('.skill-pill');
        pills.forEach((p, pi) => {
          setTimeout(() => p.classList.add('visible'), pi * 60);
        });
      } else {
        setTimeout(() => e.target.classList.add('visible'), 80);
      }
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.tl-item, .proj-card, .skill-pill').forEach(el => observer.observe(el));

const projectData = {
  "credit-risk": {
    title: "Credit Risk Prediction",
    subtitle: "PySpark based machine learning pipeline for loan default prediction.",
    overview: "This project uses PySpark ML to build a scalable credit risk classification pipeline. I prepared features, trained multiple models, and evaluated performance for predicting loan default risk.",
    result: "Achieved ROC AUC around 0.92 and scaled the workflow using GCP Dataproc for distributed processing.",
    tags: ["PySpark", "GCP Dataproc", "Random Forest", "Logistic Regression"],
    github: "https://github.com/lockyous/credit-risk-pyspark"
  },
  "amazon-sentiment": {
    title: "Amazon Review Sentiment",
    subtitle: "NLP based sentiment classification on large scale review data.",
    overview: "This project classifies Amazon reviews into sentiment categories using TF IDF features and machine learning models in Python.",
    result: "Improved the negative class F1 score from 0.26 to 0.71 through preprocessing and hyperparameter tuning on 568K plus reviews.",
    tags: ["Python", "NLP", "TF IDF", "scikit-learn"],
    github: "https://github.com/lockyous/amazon-sentiment-classification"
  },
  "bot-detection": {
    title: "Bot Detection Model",
    subtitle: "R based classification project for identifying bot accounts.",
    overview: "I used exploratory data analysis in R to understand class imbalance and feature patterns, then trained a decision tree model to classify accounts as bots or humans.",
    result: "Built an interpretable classification workflow and visualized feature importance to support model understanding.",
    tags: ["R", "Decision Tree", "EDA", "Kaggle"],
    github: "https://github.com/lockyous/bot-detection"
  },
  "regression-visualizer": {
    title: "Interactive Regression Visualizer",
    subtitle: "Interactive R Shiny app for exploring regression relationships.",
    overview: "This project is an interactive visualization app built with R Shiny and Plotly. It allows users to explore regression patterns and data relationships in real time.",
    result: "Created a user friendly interface for dynamic regression exploration and visual analytics.",
    tags: ["R Shiny", "Plotly", "Data Visualization", "Regression"],
    github: "https://github.com/lockyous/shiny-regression-visualizer"
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalOverview = document.getElementById("modalOverview");
const modalResult = document.getElementById("modalResult");
const modalTags = document.getElementById("modalTags");
const modalGithub = document.getElementById("modalGithub");
const closeModal = document.getElementById("closeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

document.querySelectorAll(".proj-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    const project = projectData[key];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalOverview.textContent = project.overview;
    modalResult.textContent = project.result;
    modalGithub.href = project.github;

    modalTags.innerHTML = "";
    project.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    modal.classList.add("active");
  });
});

function closeProjectModal() {
  modal.classList.remove("active");
}

closeModal.addEventListener("click", closeProjectModal);
modalCloseBtn.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeProjectModal();
  }
});

