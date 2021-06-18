
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','0f5'),
  exact: true,
},
{
  path: '/blog/2016/03/11/blog-post',
  component: ComponentCreator('/blog/2016/03/11/blog-post','837'),
  exact: true,
},
{
  path: '/citations',
  component: ComponentCreator('/citations','36e'),
  exact: true,
},
{
  path: '/help',
  component: ComponentCreator('/help','416'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','4f1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','3b0'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','19c'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/ECGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/ECGSetup','901'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/EEGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/EEGSetup','f7e'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/EMGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/EMGSetup','523'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/ExGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/ExGSetup','7da'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/CytonGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/CytonGS','451'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/DaisyGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/DaisyGS','6e4'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/GanglionGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/GanglionGS','30f'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/WiFiGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/WiFiGS','52c'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Community/Community',
  component: ComponentCreator('/docs/01GettingStarted/Community/Community','10c'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/GettingStartedLanding',
  component: ComponentCreator('/docs/01GettingStarted/GettingStartedLanding','726'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonDataFormat',
  component: ComponentCreator('/docs/02Cyton/CytonDataFormat','917'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonExternal',
  component: ComponentCreator('/docs/02Cyton/CytonExternal','533'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonLanding',
  component: ComponentCreator('/docs/02Cyton/CytonLanding','cae'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonProgram',
  component: ComponentCreator('/docs/02Cyton/CytonProgram','9f4'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonRadios',
  component: ComponentCreator('/docs/02Cyton/CytonRadios','e67'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSDCard',
  component: ComponentCreator('/docs/02Cyton/CytonSDCard','a9f'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSDK',
  component: ComponentCreator('/docs/02Cyton/CytonSDK','278'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSpecs',
  component: ComponentCreator('/docs/02Cyton/CytonSpecs','5a1'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionDataFormat',
  component: ComponentCreator('/docs/03Ganglion/GanglionDataFormat','3d4'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionLanding',
  component: ComponentCreator('/docs/03Ganglion/GanglionLanding','63f'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionProgram',
  component: ComponentCreator('/docs/03Ganglion/GanglionProgram','828'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionSDK',
  component: ComponentCreator('/docs/03Ganglion/GanglionSDK','8db'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionSpecs',
  component: ComponentCreator('/docs/03Ganglion/GanglionSpecs','536'),
  exact: true,
},
{
  path: '/docs/04AddOns/AddOnLanding',
  component: ComponentCreator('/docs/04AddOns/AddOnLanding','235'),
  exact: true,
},
{
  path: '/docs/04AddOns/Electrodes/ElectrodesLanding',
  component: ComponentCreator('/docs/04AddOns/Electrodes/ElectrodesLanding','2ae'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/ElectrodeCap',
  component: ComponentCreator('/docs/04AddOns/Headwear/ElectrodeCap','f07'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/HeadBand',
  component: ComponentCreator('/docs/04AddOns/Headwear/HeadBand','03d'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/MarkIII',
  component: ComponentCreator('/docs/04AddOns/Headwear/MarkIII','987'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/MarkIV',
  component: ComponentCreator('/docs/04AddOns/Headwear/MarkIV','308'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/EmotiBit/EmotiBit_Guide',
  component: ComponentCreator('/docs/05ThirdParty/EmotiBit/EmotiBit_Guide','290'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/HEGduino Kit/HEGduino',
  component: ComponentCreator('/docs/05ThirdParty/HEGduino Kit/HEGduino','2b6'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/IDUN_Dryode/Dryode',
  component: ComponentCreator('/docs/05ThirdParty/IDUN_Dryode/Dryode','98a'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Myoware/MyoCyton',
  component: ComponentCreator('/docs/05ThirdParty/Myoware/MyoCyton','901'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Myoware/MyoGanglion',
  component: ComponentCreator('/docs/05ThirdParty/Myoware/MyoGanglion','5e2'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Pulse_Sensor/Pulse_Sensor_Landing',
  component: ComponentCreator('/docs/05ThirdParty/Pulse_Sensor/Pulse_Sensor_Landing','846'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/ThinkPulse/ThinkPulse',
  component: ComponentCreator('/docs/05ThirdParty/ThinkPulse/ThinkPulse','c4c'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/ThirdPartyLanding',
  component: ComponentCreator('/docs/05ThirdParty/ThirdPartyLanding','be7'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiAPI',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiAPI','134'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiLanding',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiLanding','5da'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiProgam',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiProgam','b93'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiSDK',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiSDK','039'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/BioEra',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/BioEra','689'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/BrainBay',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/BrainBay','da4'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/LSL',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/LSL','624'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/Matlab',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/Matlab','f6b'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/Neuromore',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/Neuromore','92c'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/OpenVibe',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/OpenVibe','212'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/VirtualBox',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/VirtualBox','b3c'),
  exact: true,
},
{
  path: '/docs/06Software/OpenBCISoftware/GUIDocs',
  component: ComponentCreator('/docs/06Software/OpenBCISoftware/GUIDocs','456'),
  exact: true,
},
{
  path: '/docs/06Software/OpenBCISoftware/GUIWidgets',
  component: ComponentCreator('/docs/06Software/OpenBCISoftware/GUIWidgets','39d'),
  exact: true,
},
{
  path: '/docs/06Software/SoftwareLanding',
  component: ComponentCreator('/docs/06Software/SoftwareLanding','5aa'),
  exact: true,
},
{
  path: '/docs/07Examples/CommunityPageProjects',
  component: ComponentCreator('/docs/07Examples/CommunityPageProjects','0e9'),
  exact: true,
},
{
  path: '/docs/07Examples/EEGProjects/FocusArduino',
  component: ComponentCreator('/docs/07Examples/EEGProjects/FocusArduino','4ce'),
  exact: true,
},
{
  path: '/docs/07Examples/EEGProjects/MotorImagery',
  component: ComponentCreator('/docs/07Examples/EEGProjects/MotorImagery','c30'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMG_Chrome_Dino_Game',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMG_Chrome_Dino_Game','cd7'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMG_LED',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMG_LED','706'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGmusic',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGmusic','dbc'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGscrolling',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGscrolling','eb4'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGslideshow',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGslideshow','e36'),
  exact: true,
},
{
  path: '/docs/07Examples/ExamplesLanding',
  component: ComponentCreator('/docs/07Examples/ExamplesLanding','481'),
  exact: true,
},
{
  path: '/docs/07Examples/VideoExperiment',
  component: ComponentCreator('/docs/07Examples/VideoExperiment','d9c'),
  exact: true,
},
{
  path: '/docs/08FAQ/Cookie',
  component: ComponentCreator('/docs/08FAQ/Cookie','acd'),
  exact: true,
},
{
  path: '/docs/08FAQ/FAQLanding',
  component: ComponentCreator('/docs/08FAQ/FAQLanding','642'),
  exact: true,
},
{
  path: '/docs/08FAQ/GenFAQ',
  component: ComponentCreator('/docs/08FAQ/GenFAQ','cd8'),
  exact: true,
},
{
  path: '/docs/08FAQ/HardFAQ',
  component: ComponentCreator('/docs/08FAQ/HardFAQ','84c'),
  exact: true,
},
{
  path: '/docs/08FAQ/HowProductsGoTogether',
  component: ComponentCreator('/docs/08FAQ/HowProductsGoTogether','a25'),
  exact: true,
},
{
  path: '/docs/08FAQ/Liability',
  component: ComponentCreator('/docs/08FAQ/Liability','0c7'),
  exact: true,
},
{
  path: '/docs/08FAQ/PaymentFAQ',
  component: ComponentCreator('/docs/08FAQ/PaymentFAQ','bda'),
  exact: true,
},
{
  path: '/docs/08FAQ/Privacy',
  component: ComponentCreator('/docs/08FAQ/Privacy','ff5'),
  exact: true,
},
{
  path: '/docs/08FAQ/Returns',
  component: ComponentCreator('/docs/08FAQ/Returns','dc4'),
  exact: true,
},
{
  path: '/docs/08FAQ/ShippingFAQ',
  component: ComponentCreator('/docs/08FAQ/ShippingFAQ','746'),
  exact: true,
},
{
  path: '/docs/09Deprecated/8bitBoardDep',
  component: ComponentCreator('/docs/09Deprecated/8bitBoardDep','b52'),
  exact: true,
},
{
  path: '/docs/09Deprecated/DeprecatedLanding',
  component: ComponentCreator('/docs/09Deprecated/DeprecatedLanding','fc3'),
  exact: true,
},
{
  path: '/docs/09Deprecated/Hub',
  component: ComponentCreator('/docs/09Deprecated/Hub','ac1'),
  exact: true,
},
{
  path: '/docs/09Deprecated/Python',
  component: ComponentCreator('/docs/09Deprecated/Python','ec1'),
  exact: true,
},
{
  path: '/docs/09Deprecated/SpiderclawDep',
  component: ComponentCreator('/docs/09Deprecated/SpiderclawDep','6ab'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark1Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark1Dep','ebc'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark2Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark2Dep','626'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark3_NovaDep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark3_NovaDep','93f'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark3Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark3Dep','dec'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Linux',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Linux','478'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Mac',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Mac','829'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Windows',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Windows','320'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/GUI_Troubleshooting',
  component: ComponentCreator('/docs/10Troubleshooting/GUI_Troubleshooting','c24'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/minimizingNoise',
  component: ComponentCreator('/docs/10Troubleshooting/minimizingNoise','2b6'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/TroubleshootingLanding',
  component: ComponentCreator('/docs/10Troubleshooting/TroubleshootingLanding','41b'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/FirmwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/FirmwareDevelopment','fbd'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/ForDevelopersLanding',
  component: ComponentCreator('/docs/11ForDevelopers/ForDevelopersLanding','371'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/HardwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/HardwareDevelopment','bdb'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/SoftwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/SoftwareDevelopment','e6d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
