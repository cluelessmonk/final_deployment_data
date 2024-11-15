import React from 'react';

const Programme = () => {
  const schedule = [
    {
      day: "Day 1 (Nov 15, 2024)",
      events: [
        {
          time: "1:30 - 2:45 p.m.",
          title: "Inauguration and Plenary Talk",
          speaker: "Prof. Suman Chakraborty, IIT-KGP",
          talkTitle: "Community Transformation via Democratized Diagnostic Technologies for the Underserved",
          mode: "In person",
        },
        {
          time:"2:45 - 3:30pm",
          title:"High Tea"
        },
        {
          time: "3:30 - 6:10 p.m.",
          title: "Session 1: Biomarker Discovery and OMICS Technology in Disease Diagnosis",
          details: [
            {
              time: "3:30 - 4:00 p.m.",
              speaker: "Prof Elizabeth Anne Howlett Hall, Cambridge University, UK",
              talkTitle: "Biosensors without frontiers: nucleic acid testing in low resource areas",
              mode: "In person",
            },
            {
              time: "4:00 - 4:30 p.m.",
              speaker: "Dr. Ashok Sharma, AIIMS Delhi, India",
              talkTitle: "The iOncology.ai Platform: Transforming Ovarian Cancer Diagnosis Through Novel Biomarker Discovery.",
              mode: "In person",
            },
            {
              time: "4:30 - 4:50 p.m.",
              speaker: "Dr. Moh'd Khushman, Washington University, USA",
              talkTitle: "Clinical innovations in cancer screening, monitoring and treatment",
              mode: "In person",
            },
            {
              time: "4:50 - 5:10 p.m.",
              speaker: "Dr. Aastha Mishra, CSIR-IGIB, New Delhi, India",
              talkTitle: "Integrated omics approach to delineate high altitude physiology and pathophysiology",
              mode: "In person",
            },
            {
              time: "5:10 - 5:30 p.m.",
              speaker: "Dr. Ashish Gupta, SGPGIMS, Lucknow, India",
              talkTitle: "Non-Invasive Urinary Prothrombin Fragment 1+2 to Measure Blood Coagulation Indices",
              mode: "In person",
            },
            {
              time: "5:30 - 5:50 p.m.",
              speaker: "Dr. Ravi Kumar Arun, IIT Jammu, India",
              talkTitle: "Microfluidic Lab on Chip Devices for Affordable Healthcare",
              mode: "In person",
            },
            {
              time: "5:50 - 6:00 p.m.",
              speaker: "Smriti Jha",
              talkTitle: "Identification Of Genetic and Blood-Based Biomarkers Which Increase Risk of Cognitive Decline in Stroke Patients.",
              mode: "In person",
            },
            {
              time: "6:00 - 6:10 p.m.",
              speaker: "Puja Sinha",
              talkTitle: "Nampt Activator P7C3 Ameliorates Diabetes and Improves Skeletal Muscle Function Modulating Cellular Metabolism.",
              mode: "Online",
            },
          ],
        },
        {
          time: "7:30 - 9:00 p.m.",
          title: "Dinner",
        },
      ],
    },
    {
      day: "Day 2 (Nov 16, 2024)",
      events: [
        {
          time:"7:30 - 9:00 a.m",
          title:"Breakfast"
        },
        {
          time: "9:00 - 11:30 a.m.",
          title: "Session 2: Advancements in Cancer Diagnostics and Liquid Biopsy",
          details: [
            {
              time: "9:00 - 9:30 a.m.",
              speaker: "Prof. Bushra Ateeq, BSBE, IIT Kanpur, India",
              talkTitle: "Mechanistic underpinnings and therapeutic interventions for the major prostate cancer subtypes",
              mode: "In person",
            },
            {
              time: "9:30 - 10:00 a.m.",
              speaker: "Prof. Chandrasekhar Kanduri, University of Gothenburg, Sweden",
              talkTitle: "Decoding Long Non-coding RNAs: From Cancer Pathways to Therapeutic Targets",
              mode: "In person",
            },
            {
              time: "10:00 - 10:20 a.m.",
              speaker: "Dr. Kanhaiya Singh, University of Pittsburgh, USA",
              talkTitle: "Tissue nanotransfection-based Cell Specific Epigenetic Editing in vivo to Rescue Diabetic Ischemic Tissue",
              mode: "In person",
            },
            {
              time: "10:20 - 10:40 a.m.",
              speaker: "Dr. Monika Sachdev, CSIR-CDRI, Lucknow, India",
              talkTitle: "Germ Cell Maturation Markers Can Serve as Early Diagnostic Markers in Cancers and Targets for Immunotherapy",
              mode: "In person",
            },
            {
              time: "10:40 - 11:00 a.m.",
              speaker: "Prof. Subash Chandra Gupta, AIIMS Guwahati, India",
              talkTitle: "Deciphering the Potential of Long Non-Coding RNA as Molecular Signatures in Gallbladder Cancer",
              mode: "Online",
            },
            {
              time: "11:00 - 11:10 a.m.",
              speaker: "Sakshi Singh",
              talkTitle: "Gene Expression analysis of m6A (N6-methyladenosine) methylation modifiers in epithelial ovarian cancer",
              mode: "In person",
            },
            {
              time: "11:10 - 11:20 a.m.",
              speaker: "Shivani Kumari",
              talkTitle: "1H-NMR driven identification of vulnerable metabolites and pathways in renal cell carcinoma",
              mode: "In person",
            },
            {
              time: "11:20 - 11:30 a.m.",
              speaker: "Namita Jaiswal",
              talkTitle: "Development of a Microfluidic Platform Integrated Electrochemical Biosensor with Antibody Functionalized Nanogold Array-Decorated CNT Nanocomposite for Circulating Tumor Cell Detection",
              mode: "In person",
            },
          ],
        },
        {
          time:"11:30 - 11:45 a.m",
          title:"Tea - Break"
        },
        {
          time: "11:45 a.m. - 1:35 p.m.",
          title: "Session 3: Nanotechnology in Disease Diagnostics",
          details: [
            {
              time: "11:45 a.m. - 12:15 p.m.",
              speaker: "Dr. Pranjal Chandra, IIT-BHU, Varanasi, India",
              talkTitle: "Intelligent Nanobioengineering for affordable sensing devices",
              mode: "In person",
            },
            {
              time: "12:15  - 12:35 p.m.",
              speaker: "Dr. Gorachand Dutta, IIT-KGP, India",
              talkTitle: "Nanobio Technology Enabled Electrochemical Sensor Devices for On-site Monitoring",
              mode: "In person",
            },
            {
              time: "12:35 - 12:55 p.m.",
              speaker: "Dr. Amit Jaiswal, IIT-Mandi, India",
              talkTitle: "Gold-based plasmonic nanostructures for sensing and biomedical applications ",
              mode: "In person",
            },
            {
              time: "12:55  - 1:15 p.m.",
              speaker: "Dr. Santosh Kumar Misra, IIT-Kanpur, India",
              talkTitle: " Nanocarbon: Template material for Generating New Generation Diagnalytics",
              mode: "In person",
            },
            {
              time: "1:15  - 1:35 p.m.",
              speaker: "Dr. Sumit Kr Singh, IIT-BHU, Varanasi, India ",
              talkTitle: " Identification of critical quality attributes of biotherapeutics: Case studies ",
              mode: "In person",
            },
            
            // Additional sessions for Day 2 can be added here following this pattern
          ],
        },

        {
          time:"1:35 - 3:00 p.m",
          title:"Lunch Break + Poster Session (1:35 - 3:00 p.m)"
        },
        {
          time: "3:00 - 5:30 p.m.",
          title: "Session 4: Point of Care Diagnostics, Miniaturization, and Automation",
          details: [
            {
              time: "3:00 - 3:30 p.m.",
              speaker: "Dr. Sandeep Kr. Vashist, Fapon Biotech Inc., Germany",
              talkTitle: "In vitro diagnostic technologies for healthcare: State-of-the-Art, trends, challenges and future direction",
              mode: "Online",
            },
            {
              time: "3:30 - 4:00 p.m.",
              speaker: "Prof. Uday Chand Ghoshal, Gastroenterology Apollo Multispecialty Hospital, Kolkata, India",
              talkTitle: "Gastric cancer and H. pylori: The Asian and Indian enigma",
              mode: "Online",
            },
            {
              time: "4:00 - 4:20 p.m.",
              speaker: "Prof. Satheesh Babu T. G., Amrita Vishwa Vidyapeetham, Coimbatore, India",
              talkTitle: "Development of Multicolour Emissive Colistin Carbon Dots Based Optical and Electrochemical Sensor for the Sensitive Detection of Gram-Negative Bacteria",
              mode: "Online",
            },
            {
              time: "4:20 - 4:40 p.m.",
              speaker: "Dr. Prasoon Kumar, NIT-Rourkela, India",
              talkTitle: "Investigation into the design of paper microfluidics for manipulating flow behaviour needed for developing point-of-care diagnostic devices",
              mode: "In person",
            },
            {
              time: "4:40 - 5:00 p.m.",
              speaker: "Dr. Vinay Patel, IIT-KGP, India",
              talkTitle: "An electropolymerized self-assembled monolayer of crystal violet for Chemiresistive hydrogen peroxide sensor",
              mode: "In person",
            },
            {
              time: "5:00 - 5:10 p.m.",
              speaker: "Mandeep Singh",
              talkTitle: "CRISPR-Driven Point-of-Care Nucleic Acid Assays for Infectious Disease Detection",
              mode: "In person",
            },
            {
              time: "5:10 - 5:20 p.m.",
              speaker: "Smriti Singh",
              talkTitle: "A Label-Free Electrochemical Aptasensor for Sensitive Detection of Staphylococcal Enterotoxin type A",
              mode: "In person",
            },
            {
              time: "5:20 - 5:30 p.m.",
              speaker: "Pragyan Ray",
              talkTitle: "Manipulating Fluid Flow to Achieving Enhanced Mixing in Microporous Paper",
              mode: "In person",
            },
          ],
        },
        {
          time:"5:30 - 5:45 p.m",
          title:"Tea -Break"
        },
        {
          time: "5:45 - 7:00 p.m.",
          title: "Session 5: Point of Care Diagnostics",
          details: [
            {
              time: "5:45 - 6:15 p.m.",
              speaker: "Prof. Sathees C. Raghavan, IISc Bangalore, India",
              talkTitle: "Discovery of a Promising Cancer Therapeutic: The Novel BCL2 Inhibitor, Disarib",
              mode: "In person",
            },
            {
              time: "6:15 - 6:35 p.m.",
              speaker: "Dr. Zineb Qmichou, MAScIR, Morocco, Africa",
              talkTitle: "Diagnostic Solutions: MAScIR’s R&D Kits Experience in Morocco",
              mode: "In person",
            },
            {
              time: "6:35 - 6:55 p.m.",
              speaker: "Dr. Arindam Chakraborty, Enzene Biosciences Ltd, Pune, India",
              talkTitle: "Democratizing access to life-saving medicines through fully connected continuous manufacturing (FCCM)",
              mode: "In person",
            },
          ],
        },
        {
          time:"7:30 - 8:30 p.m",
          title:"Cultural Programme"
        },
        {
          time:"8:30 - 10:00 p.m",
          title:"Dinner"
        }
      ],
    },
    {
      day: "Day 3 (Nov 17, 2024)",
      events: [
        {
          time:"7:30 - 9:00 a.m",
          title:"Breakfast"
        },
        {
          time: "9:00 - 10:25 a.m.",
          title: "Session 6: Young Scientist Award presentations [LHC-3]",
          details: [
            {
              time: "9:00 - 9:20 a.m.",
              speaker: "Amit Kumar Yadav",
              talkTitle: "In Vitro Selection, and Characterization of High-Affinity Cag A-Targeting Aptamers for Early-Stage Detection of Gastric Cancer",
              mode: "In person",
            },
            {
              time: "9:20 - 9:40 a.m.",
              speaker: "Piyush Kumar Gupta",
              talkTitle: "Development of cysteamine modified carbon dots from Ruellia simplex: an in vivo toxicological analysis in fruit fly for potential bioimaging",
              mode: "In person",
            },
            {
              time: "9:40 - 9:55 a.m.",
              speaker: "Priyanka Gautam",
              talkTitle: "Comprehensive DNA Methylation Analysis Using MeDIP-NGS Reveals Potential Genes and Pathways Involved in Epithelial Ovarian Cancer",
              mode: "In person",
            },
            {
              time: "9:55 - 10:10 a.m.",
              speaker: "Rohini Kumari",
              talkTitle: "Hperoxide-Check: An Automated Nanoanalytical Device for Onsite Hydrogen Peroxide Quantification",
              mode: "In person",
            },
            {
              time: "10:10 - 10:25 a.m.",
              speaker: "Shweta Lal",
              talkTitle: "A Flexible Non-Enzymatic Electrochemical Sensor for the Sensing of Urinary Biomarkers",
              mode: "In person",
            },
          ],
        },
        {
          time: "9:00 - 11:00 a.m.",
          title: "Parallel Session 6: [Institute Seminar Hall]",
          details: [
            {
              time: "9:00 - 9:30 a.m.",
              speaker: "Prof. Sanket Goel, BITS Pilani, Hyderabad Campus, India",
              talkTitle: "Revolutionizing Diagnostic Monitoring: Advances in Biomarkers, Microfluidics, and Point-of-Care Technologies for Global Health",
              mode: "Online",
            },
            {
              time: "9:30 - 9:50 a.m.",
              speaker: "Dr. Manish Kr. Gupta, Veer Bahadur Singh Purvanchal University, Jaunpur-India",
              talkTitle: "Omics and Integrative Biology Based Approach for Investigation of Key Regulators, Drug Targets and Complexity Involved in The Disease Pathway",
              mode: "In person",
            },
            {
              time: "9:50 - 10:00 a.m.",
              speaker: "Prof. Elizabeth Anne Howlett Hall, Cambridge University, UK",
              talkTitle: "Flash Talk",
              mode: "In person",
            },
            {
              time: "10:00 - 10:10 a.m.",
              speaker: "Mr. Ashish Dubey, Redcliffe Labs, India",
              talkTitle: "Flash Talk",
              mode: "In person",
            },
            {
              time: "10:10 - 10:20 a.m.",
              speaker: "Ms. Ankita Sharma, Wiley Publishing Group",
              talkTitle: "Flash Talk",
              mode: "In person",
            },
            {
              time: "10:20 - 10:30 a.m.",
              speaker: "Natish Kumar",
              talkTitle: "Rapid Detection of HPV Using a Microfluidic Device Integrated with Lateral Flow Assay for Point-of-Care Diagnostics",
              mode: "In person",
            },
            {
              time: "10:30 - 10:40 a.m.",
              speaker: "Shrikant Kashyap",
              talkTitle: "An Indigenous Colorimetric Sensor for Monitoring Total Iron in Water Samples for Healthcare Applications",
              mode: "In person",
            },
            {
              time: "10:40 - 10:50 a.m.",
              speaker: "Upasana Gupta",
              talkTitle: "Bio-Inspired Self-Pumping Microfluidic Device for Cleaning of Urea Using Reduced Graphene Oxide (rGO) Modified Polymeric Nanohybrid Membrane",
              mode: "In person",
            },
            {
              time: "10:50 - 11:00 a.m.",
              speaker: "Sonia Sarangi",
              talkTitle: "Electrochemical and Computational Insights into Phenylalanine Detection Via PANI-MIPs",
              mode: "In person",
            },
          ],
        },
        {
          time:"11:00 - 11:15 a.m",
          title:"Tea - Break"
        },
        {
          time: "11:15 a.m. - 1:35 p.m.",
          title: "Session 7: AI & ML in Diagnostics, Precision Medicine and Digital Health",
          details: [
            {
              time: "11:15 - 11:35 a.m.",
              speaker: "Dr. Devashish Rath, BARC, Mumbai, India",
              talkTitle: "CRISPR-Cas Based Point-Of-Care Diagnostics for Infectious Diseases",
              mode: "In person",
            },
            {
              time: "11:35 - 11:55 a.m.",
              speaker: "Dr. Mitradip Bhattacharjee, IISER Bhopal, India",
              talkTitle: "Flexible and Printed Graphene FET: A Way Forward Towards Disposable Biosensing",
              mode: "In person",
            },
            {
              time: "11:55 - 12:15 p.m.",
              speaker: "Dr. Ashutosh Kr. Mishra, IIT-Hyderabad, India",
              talkTitle: "Designing novel flavin as small molecule chemical construct for biomedical applications",
              mode: "In person",
            },
            {
              time: "12:15 - 12:35 p.m.",
              speaker: "Dr. Saurabh Kumar, NIPER Guwahati, India",
              talkTitle: "Advanced materials in wearable sensors for healthcare monitoring",
              mode: "In person",
            },
            {
              time: "12:35 - 12:55 p.m.",
              speaker: "Dr. Anand Kumar M, NITK-Surathkal, India",
              talkTitle: "Exploring the Future: Insights and Advancements in Multimodal Large Language Models",
              mode: "Online",
            },
            {
              time: "12:55 - 1:15 p.m.",
              speaker: "Prof. Cathal Gurrin, Dublin City University, Ireland",
              talkTitle: "Harnessing Lifelogs for Personal Wellness: AI-Enhanced Approaches to Wellbeing",
              mode: "Online",
            },
            {
              time: "1:15 - 1:25 p.m.",
              speaker: "Meghna Desai",
              talkTitle: "Improving gait event detection: evaluating feature selection methods for multivariate time series",
              mode: "In person",
            },
            {
              time: "1:25 - 1:35 p.m.",
              speaker: "Poluri Priyanka",
              talkTitle: "Endoscopy images classification using deep fusion of CNN models",
              mode: "In person",
            },
          ],
        },
        {
          time: "1:35 - 2:45 p.m.",
          title: "Lunch Break",
        },
        {
          time: "3:00 - 5:00 p.m.",
          title: "Valedictory Session",
        },
        {
          
          title: "Tea Break",
        },
      ],
    }
    
    // Add additional days/sessions as needed, following the format above
  ];

  return (
    <div className="p-6 bg-yellow-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        ADT-2024 Conference Schedule
      </h1>
      {schedule.map((day, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{day.day}</h2>
          <div className="space-y-6">
            {day.events.map((event, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 italic mb-2">{event.time}</p>
                {event.details ? (
                  <div className="pl-4 border-l-4 border-blue-400">
                    {event.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="mb-3">
                        <p className="text-gray-700 font-medium">
                          {detail.time} - {detail.speaker}
                        </p>
                        <p className="text-gray-600">{detail.talkTitle}</p>
                        <p className="text-gray-500 text-sm">Mode: {detail.mode}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {event.speaker && (
                      <p className="text-gray-700 font-medium mb-1">
                        {event.speaker}
                      </p>
                    )}
                    {event.talkTitle && (
                      <p className="text-gray-600">{event.talkTitle}</p>
                    )}
                    {event.mode && (
                      <p className="text-gray-500 text-sm">Mode: {event.mode}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programme;
