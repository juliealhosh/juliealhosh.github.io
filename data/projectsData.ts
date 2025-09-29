interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'MSc Thesis: Learning-based active sampling and modeling of aquatic environments',
    description: `A link to my MSc thesis, McGill University. The thesis explores the use of reinforcement learning to optimize sampling strategies in aquatic environments, with a focus on improving data collection efficiency and accuracy.`,
    imgSrc: '/static/images/projects/boat.jpeg',
    href: 'https://escholarship.mcgill.ca/concern/theses/bc386r42m?locale=en',
  },
  {
    title: 'Tractable Representations for Convergent Approximation of Distributional HJB Equations',
    description: `I worked on a project in continuous-time distributional reinforcement learning. This is the link to the paper on arXiv. This paper was published at RLDM 2025.`,
    imgSrc: '/static/images/projects/rldm.png',
    href: 'https://arxiv.org/abs/2503.05563',
  },
  {
    title: 'Topological mapping for traversability-aware long-range navigation in off-road terrain',
    description: `I collaborated on a project in off-road mapless navigation. This is the link to the paper on arXiv. This paper was published at ICRA 2025.`,
    imgSrc: '/static/images/projects/Topological_mapping_for_traversability-aware_long-range_navigation_in_off-road_terrain.png',
    href: 'https://arxiv.org/abs/2410.01925',
  },
  {
    title: 'This website',
    description: `Personal Website`,
    imgSrc: '/static/images/projects/personal_website.png',
    href: 'https://github.com/juliealhosh/juliealhosh.github.io',
  },
  {
    title: "Bird's Eye View (BEV)",
    description: `I collaborated on a computer vision project where we developed and implemented a method to generate a Bird's Eye View (BEV) image of a scene. Our approach involved detecting vanishing points, calculating homography for each image, and stitching the sequence of resulting BEV images into a single BEV of the scene. This technique provides a comprehensive overhead perspective, applicable in various fields such as autonomous vehicles and surveillance`,
    imgSrc: '/static/images/projects/BEV.png',
    href: '/static/BEV.pdf',
  },
  {
    title: 'Reproducing the Paper: Making Deep Q-learning Methods Robust to Time Discretization',
    description: `In this project, I reproduced the experiments of the paper "Making Deep Q-learning Methods Robust to Time Discretization" by implementing the Deep Advantage Updating algorithm (DAU) and the DQN algorithm, and comparing their performance and robustness to different time discretizations`,
    imgSrc:
      '/static/images/projects/Reproducing_Making_Deep_Q-learning_Methods_Robust_to_Time_Discretization.png',
    href: '/static/Reproducing_Making_Deep_Q-learning_Methods_Robust_to_Time_Discretization.pdf',
  },
  {
    title: 'Reproducing the Paper: Robust Adversarial Reinforcement Learning (RARL)',
    description: `I collaborated on a reinforcement learning (RL) project based on the paper "Robust Adversarial Reinforcement Learning". In this project, we implemented, tested, and reported the findings regarding robust adversarial RL by comparing the significance of using this approach with 2 different state-of-the-art RL algorithms, TD3 and PPO on three Gym environments`,
    imgSrc: '/static/images/projects/RARL.png',
    href: '/static/RARL.pdf',
  },
  {
    title: "The Triviality of Kontsevich's Flow on Quasi-Homogeneous Poisson Structures",
    description:
      "In this project, I proved that Kontsevich's flows on two-dimensional quasi-homogeneous Poisson structures are trivial",
    imgSrc:
      "/static/images/projects/The_Triviality_of_Kontsevich's_Flow_on_Quasi-Homogeneous_Poisson_Structures.png",
    href: "/static/The_Triviality_of_Kontsevich's_Flow_on_Quasi-Homogeneous_Poisson_Structures.pdf",
  },
  {
    title: 'Flows on the Space of Poisson Structures',
    description:
      'This report provides background information about Kontsevich\'s flows on Poisson structures. In this project, I further developed the "starproduct" SageMath software package by implementing the action of GRT on Poisson structures. The results of calculating examples of Kontsevich\'s flows on two-dimensional Poisson structures are included in the report',
    imgSrc: '/static/images/projects/Flows_on_the_Space_of_Poisson_Structures.png',
    href: '/static/Flows_on_the_Space_of_Poisson_Structures.pdf',
  },
]

export default projectsData
