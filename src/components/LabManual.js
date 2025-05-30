import React, { useState } from 'react';
import '../styles/LabManual.css';

const experiments = [
  {
    id: 1,
    title: 'Web Services',
    objectives: [
      'Understand the concept of web services',
      'Implement basic web service operations',
      'Test web service functionality'
    ],
    requirements: [
      'Java Development Kit (JDK)',
      'Eclipse IDE',
      'Apache Tomcat Server'
    ],
    procedure: [
      'Create a new web service project in Eclipse',
      'Define the web service interface',
      'Implement the service methods',
      'Deploy and test the service'
    ],
    verification: [
      'Verify service deployment',
      'Test service operations',
      'Validate response data'
    ]
  },
  {
    id: 2,
    title: 'IPC and Messaging',
    objectives: [
      'Learn Inter-Process Communication mechanisms',
      'Implement message passing between processes',
      'Understand synchronization concepts'
    ],
    requirements: [
      'Linux/Unix Operating System',
      'GCC Compiler',
      'Text Editor'
    ],
    procedure: [
      'Write programs for different IPC mechanisms',
      'Implement message queues',
      'Test process communication'
    ],
    verification: [
      'Verify message transmission',
      'Check process synchronization',
      'Validate data integrity'
    ]
  },
  {
    id: 3,
    title: 'Virtualization',
    objectives: [
      'Understand virtualization concepts',
      'Set up virtual machines',
      'Manage virtual resources'
    ],
    requirements: [
      'VirtualBox/VMware',
      'ISO image of operating system',
      'Minimum 8GB RAM'
    ],
    procedure: [
      'Install virtualization software',
      'Create new virtual machine',
      'Configure virtual hardware',
      'Install operating system'
    ],
    verification: [
      'Verify VM creation',
      'Test VM functionality',
      'Check resource allocation'
    ]
  },
  {
    id: 4,
    title: 'VM Programming',
    objectives: [
      'Learn VM management APIs',
      'Automate VM operations',
      'Monitor VM resources'
    ],
    requirements: [
      'Python/Java',
      'Virtualization platform API',
      'Development environment'
    ],
    procedure: [
      'Set up API environment',
      'Write scripts for VM management',
      'Implement monitoring functions'
    ],
    verification: [
      'Test automation scripts',
      'Verify resource monitoring',
      'Validate error handling'
    ]
  },
  {
    id: 5,
    title: 'AWS EC2',
    objectives: [
      'Understand AWS EC2 service',
      'Launch and manage instances',
      'Configure security and networking'
    ],
    requirements: [
      'AWS Account',
      'AWS CLI',
      'Basic Linux knowledge'
    ],
    procedure: [
      'Set up AWS credentials',
      'Launch EC2 instance',
      'Configure security groups',
      'Connect to instance'
    ],
    verification: [
      'Verify instance status',
      'Test connectivity',
      'Check security settings'
    ]
  },
  {
    id: 6,
    title: 'OpenStack',
    objectives: [
      'Deploy OpenStack environment',
      'Manage cloud resources',
      'Configure networking'
    ],
    requirements: [
      'Ubuntu Server',
      'DevStack',
      'Minimum 16GB RAM'
    ],
    procedure: [
      'Install DevStack',
      'Configure OpenStack services',
      'Create instances',
      'Set up networking'
    ],
    verification: [
      'Verify service status',
      'Test instance creation',
      'Check network connectivity'
    ]
  },
  {
    id: 7,
    title: 'Google App Engine',
    objectives: [
      'Deploy applications on GAE',
      'Configure app settings',
      'Manage app versions'
    ],
    requirements: [
      'Google Cloud Account',
      'Google Cloud SDK',
      'Python/Java/Go application'
    ],
    procedure: [
      'Set up Cloud SDK',
      'Prepare application',
      'Deploy to App Engine',
      'Configure services'
    ],
    verification: [
      'Check deployment status',
      'Test application',
      'Monitor performance'
    ]
  },
  {
    id: 8,
    title: 'Docker',
    objectives: [
      'Understand containerization',
      'Create and manage containers',
      'Build custom images'
    ],
    requirements: [
      'Docker Engine',
      'Docker CLI',
      'Sample application'
    ],
    procedure: [
      'Install Docker',
      'Create Dockerfile',
      'Build image',
      'Run containers'
    ],
    verification: [
      'Verify container status',
      'Test application',
      'Check resource usage'
    ]
  },
  {
    id: 9,
    title: 'File Transfer',
    objectives: [
      'Implement cloud storage',
      'Manage file transfers',
      'Handle large files'
    ],
    requirements: [
      'Cloud storage account',
      'SDK/API access',
      'Test files'
    ],
    procedure: [
      'Set up storage bucket',
      'Configure access',
      'Implement transfer logic',
      'Handle errors'
    ],
    verification: [
      'Test file upload',
      'Verify file integrity',
      'Check permissions'
    ]
  },
  {
    id: 10,
    title: 'TryStack',
    objectives: [
      'Use TryStack environment',
      'Deploy test workloads',
      'Monitor resources'
    ],
    requirements: [
      'TryStack account',
      'Web browser',
      'SSH client'
    ],
    procedure: [
      'Access TryStack dashboard',
      'Create instances',
      'Configure networking',
      'Deploy applications'
    ],
    verification: [
      'Check instance status',
      'Test connectivity',
      'Verify application deployment'
    ]
  },
  {
    id: 11,
    title: 'Hadoop',
    objectives: [
      'Set up Hadoop cluster',
      'Run MapReduce jobs',
      'Manage HDFS'
    ],
    requirements: [
      'Java Runtime Environment',
      'Hadoop distribution',
      'Linux environment'
    ],
    procedure: [
      'Install Hadoop',
      'Configure cluster',
      'Set up HDFS',
      'Run sample job'
    ],
    verification: [
      'Verify cluster status',
      'Test HDFS operations',
      'Check job completion'
    ]
  },
  {
    id: 12,
    title: 'OpenFaaS',
    objectives: [
      'Understand serverless concepts',
      'Deploy functions',
      'Monitor execution'
    ],
    requirements: [
      'Docker',
      'Kubernetes/Docker Swarm',
      'OpenFaaS CLI'
    ],
    procedure: [
      'Install OpenFaaS',
      'Create functions',
      'Deploy to cluster',
      'Test invocations'
    ],
    verification: [
      'Check function status',
      'Test scaling',
      'Monitor performance'
    ]
  },
  {
    id: 13,
    title: 'CloudSim',
    objectives: [
      'Simulate cloud environments',
      'Configure resources',
      'Analyze performance'
    ],
    requirements: [
      'Java Development Kit',
      'CloudSim toolkit',
      'IDE (Eclipse/IntelliJ)'
    ],
    procedure: [
      'Set up CloudSim',
      'Create simulation',
      'Configure parameters',
      'Run scenarios'
    ],
    verification: [
      'Verify simulation results',
      'Analyze metrics',
      'Document findings'
    ]
  }
];

const LabManual = () => {
  const [selectedExperiment, setSelectedExperiment] = useState(null);

  const handleExperimentClick = (experiment) => {
    setSelectedExperiment(experiment);
  };

  return (
    <div className="lab-manual-container">
      <div className="experiments-list">
        <h3>List of Experiments</h3>
        <div className="experiment-buttons">
          {experiments.map((exp) => (
            <button
              key={exp.id}
              className={'experiment-button ' + (selectedExperiment?.id === exp.id ? 'active' : '')}
              onClick={() => handleExperimentClick(exp)}
            >
              <span className="exp-number">{exp.id}.</span>
              <span className="exp-title">{exp.title}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedExperiment && (
        <div className="experiment-details">
          <h3>{selectedExperiment.title}</h3>
          
          <div className="detail-section">
            <h4>Objectives</h4>
            <ul>
              {selectedExperiment.objectives.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h4>Requirements</h4>
            <ul>
              {selectedExperiment.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h4>Procedure</h4>
            <ol>
              {selectedExperiment.procedure.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="detail-section">
            <h4>Verification Steps</h4>
            <ul>
              {selectedExperiment.verification.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="download-section">
            <a 
              href="/cc_V23_lab_Manuel.docx" 
              download 
              className="download-button"
            >
              Download Full Lab Manual
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabManual;
