
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
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
  component: ComponentCreator('/docs','71d'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','502'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/ECGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/ECGSetup','8f4'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/EEGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/EEGSetup','1a7'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/EMGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/EMGSetup','87f'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Biosensing-Setups/ExGSetup',
  component: ComponentCreator('/docs/01GettingStarted/Biosensing-Setups/ExGSetup','622'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/CytonGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/CytonGS','849'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/DaisyGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/DaisyGS','5ae'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/GanglionGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/GanglionGS','4fd'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Boards/WiFiGS',
  component: ComponentCreator('/docs/01GettingStarted/Boards/WiFiGS','d56'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/Community/Community',
  component: ComponentCreator('/docs/01GettingStarted/Community/Community','396'),
  exact: true,
},
{
  path: '/docs/01GettingStarted/GettingStartedLanding',
  component: ComponentCreator('/docs/01GettingStarted/GettingStartedLanding','6d7'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonDataFormat',
  component: ComponentCreator('/docs/02Cyton/CytonDataFormat','1a6'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonExternal',
  component: ComponentCreator('/docs/02Cyton/CytonExternal','f19'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonLanding',
  component: ComponentCreator('/docs/02Cyton/CytonLanding','807'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonProgram',
  component: ComponentCreator('/docs/02Cyton/CytonProgram','b5b'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonRadios',
  component: ComponentCreator('/docs/02Cyton/CytonRadios','1a0'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSDCard',
  component: ComponentCreator('/docs/02Cyton/CytonSDCard','931'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSDK',
  component: ComponentCreator('/docs/02Cyton/CytonSDK','03a'),
  exact: true,
},
{
  path: '/docs/02Cyton/CytonSpecs',
  component: ComponentCreator('/docs/02Cyton/CytonSpecs','29f'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionDataFormat',
  component: ComponentCreator('/docs/03Ganglion/GanglionDataFormat','adc'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionLanding',
  component: ComponentCreator('/docs/03Ganglion/GanglionLanding','d50'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionProgram',
  component: ComponentCreator('/docs/03Ganglion/GanglionProgram','5df'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionSDK',
  component: ComponentCreator('/docs/03Ganglion/GanglionSDK','bcd'),
  exact: true,
},
{
  path: '/docs/03Ganglion/GanglionSpecs',
  component: ComponentCreator('/docs/03Ganglion/GanglionSpecs','2f6'),
  exact: true,
},
{
  path: '/docs/04AddOns/AddOnLanding',
  component: ComponentCreator('/docs/04AddOns/AddOnLanding','c80'),
  exact: true,
},
{
  path: '/docs/04AddOns/Electrodes/ElectrodesLanding',
  component: ComponentCreator('/docs/04AddOns/Electrodes/ElectrodesLanding','8fb'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/ElectrodeCap',
  component: ComponentCreator('/docs/04AddOns/Headwear/ElectrodeCap','cf5'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/HeadBand',
  component: ComponentCreator('/docs/04AddOns/Headwear/HeadBand','bdd'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/MarkIII',
  component: ComponentCreator('/docs/04AddOns/Headwear/MarkIII','355'),
  exact: true,
},
{
  path: '/docs/04AddOns/Headwear/MarkIV',
  component: ComponentCreator('/docs/04AddOns/Headwear/MarkIV','f81'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/EmotiBit/EmotiBit_Guide',
  component: ComponentCreator('/docs/05ThirdParty/EmotiBit/EmotiBit_Guide','464'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/HEGduino Kit/HEGduino',
  component: ComponentCreator('/docs/05ThirdParty/HEGduino Kit/HEGduino','5a9'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/IDUN_Dryode/Dryode',
  component: ComponentCreator('/docs/05ThirdParty/IDUN_Dryode/Dryode','f76'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Myoware/MyoCyton',
  component: ComponentCreator('/docs/05ThirdParty/Myoware/MyoCyton','4a7'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Myoware/MyoGanglion',
  component: ComponentCreator('/docs/05ThirdParty/Myoware/MyoGanglion','f54'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/Pulse_Sensor/Pulse_Sensor_Landing',
  component: ComponentCreator('/docs/05ThirdParty/Pulse_Sensor/Pulse_Sensor_Landing','528'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/ThinkPulse/ThinkPulse',
  component: ComponentCreator('/docs/05ThirdParty/ThinkPulse/ThinkPulse','4d5'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/ThirdPartyLanding',
  component: ComponentCreator('/docs/05ThirdParty/ThirdPartyLanding','1cf'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiAPI',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiAPI','1cd'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiLanding',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiLanding','da4'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiProgam',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiProgam','d29'),
  exact: true,
},
{
  path: '/docs/05ThirdParty/WiFiShield/WiFiSDK',
  component: ComponentCreator('/docs/05ThirdParty/WiFiShield/WiFiSDK','66e'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/BioEra',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/BioEra','1d4'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/BrainBay',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/BrainBay','219'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/LSL',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/LSL','0aa'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/Matlab',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/Matlab','ca1'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/Neuromore',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/Neuromore','3d6'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/OpenVibe',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/OpenVibe','acb'),
  exact: true,
},
{
  path: '/docs/06Software/CompatibleThirdPartySoftware/VirtualBox',
  component: ComponentCreator('/docs/06Software/CompatibleThirdPartySoftware/VirtualBox','f8c'),
  exact: true,
},
{
  path: '/docs/06Software/OpenBCISoftware/GUIDocs',
  component: ComponentCreator('/docs/06Software/OpenBCISoftware/GUIDocs','771'),
  exact: true,
},
{
  path: '/docs/06Software/OpenBCISoftware/GUIWidgets',
  component: ComponentCreator('/docs/06Software/OpenBCISoftware/GUIWidgets','d92'),
  exact: true,
},
{
  path: '/docs/06Software/SoftwareLanding',
  component: ComponentCreator('/docs/06Software/SoftwareLanding','6a9'),
  exact: true,
},
{
  path: '/docs/07Examples/CommunityPageProjects',
  component: ComponentCreator('/docs/07Examples/CommunityPageProjects','41c'),
  exact: true,
},
{
  path: '/docs/07Examples/EEGProjects/FocusArduino',
  component: ComponentCreator('/docs/07Examples/EEGProjects/FocusArduino','839'),
  exact: true,
},
{
  path: '/docs/07Examples/EEGProjects/MotorImagery',
  component: ComponentCreator('/docs/07Examples/EEGProjects/MotorImagery','cca'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMG_Chrome_Dino_Game',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMG_Chrome_Dino_Game','27b'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMG_LED',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMG_LED','f00'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGmusic',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGmusic','3f9'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGscrolling',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGscrolling','876'),
  exact: true,
},
{
  path: '/docs/07Examples/EMGProjects/EMGslideshow',
  component: ComponentCreator('/docs/07Examples/EMGProjects/EMGslideshow','19b'),
  exact: true,
},
{
  path: '/docs/07Examples/ExamplesLanding',
  component: ComponentCreator('/docs/07Examples/ExamplesLanding','5b1'),
  exact: true,
},
{
  path: '/docs/07Examples/VideoExperiment',
  component: ComponentCreator('/docs/07Examples/VideoExperiment','11c'),
  exact: true,
},
{
  path: '/docs/08FAQ/Cookie',
  component: ComponentCreator('/docs/08FAQ/Cookie','e27'),
  exact: true,
},
{
  path: '/docs/08FAQ/FAQLanding',
  component: ComponentCreator('/docs/08FAQ/FAQLanding','42b'),
  exact: true,
},
{
  path: '/docs/08FAQ/GenFAQ',
  component: ComponentCreator('/docs/08FAQ/GenFAQ','5b0'),
  exact: true,
},
{
  path: '/docs/08FAQ/HardFAQ',
  component: ComponentCreator('/docs/08FAQ/HardFAQ','439'),
  exact: true,
},
{
  path: '/docs/08FAQ/HowProductsGoTogether',
  component: ComponentCreator('/docs/08FAQ/HowProductsGoTogether','840'),
  exact: true,
},
{
  path: '/docs/08FAQ/Liability',
  component: ComponentCreator('/docs/08FAQ/Liability','a1e'),
  exact: true,
},
{
  path: '/docs/08FAQ/PaymentFAQ',
  component: ComponentCreator('/docs/08FAQ/PaymentFAQ','709'),
  exact: true,
},
{
  path: '/docs/08FAQ/Privacy',
  component: ComponentCreator('/docs/08FAQ/Privacy','a8a'),
  exact: true,
},
{
  path: '/docs/08FAQ/Returns',
  component: ComponentCreator('/docs/08FAQ/Returns','3a3'),
  exact: true,
},
{
  path: '/docs/08FAQ/ShippingFAQ',
  component: ComponentCreator('/docs/08FAQ/ShippingFAQ','5b6'),
  exact: true,
},
{
  path: '/docs/09Deprecated/8bitBoardDep',
  component: ComponentCreator('/docs/09Deprecated/8bitBoardDep','2b9'),
  exact: true,
},
{
  path: '/docs/09Deprecated/DeprecatedLanding',
  component: ComponentCreator('/docs/09Deprecated/DeprecatedLanding','73a'),
  exact: true,
},
{
  path: '/docs/09Deprecated/Hub',
  component: ComponentCreator('/docs/09Deprecated/Hub','83e'),
  exact: true,
},
{
  path: '/docs/09Deprecated/Python',
  component: ComponentCreator('/docs/09Deprecated/Python','c0e'),
  exact: true,
},
{
  path: '/docs/09Deprecated/SpiderclawDep',
  component: ComponentCreator('/docs/09Deprecated/SpiderclawDep','b4d'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark1Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark1Dep','6a0'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark2Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark2Dep','6b6'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark3_NovaDep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark3_NovaDep','667'),
  exact: true,
},
{
  path: '/docs/09Deprecated/UltracortexMark3Dep',
  component: ComponentCreator('/docs/09Deprecated/UltracortexMark3Dep','f12'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Linux',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Linux','075'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Mac',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Mac','a94'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/FTDI_Fix_Windows',
  component: ComponentCreator('/docs/10Troubleshooting/FTDI_Fix_Windows','e0a'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/GUI_Troubleshooting',
  component: ComponentCreator('/docs/10Troubleshooting/GUI_Troubleshooting','110'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/minimizingNoise',
  component: ComponentCreator('/docs/10Troubleshooting/minimizingNoise','05a'),
  exact: true,
},
{
  path: '/docs/10Troubleshooting/TroubleshootingLanding',
  component: ComponentCreator('/docs/10Troubleshooting/TroubleshootingLanding','45f'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/FirmwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/FirmwareDevelopment','346'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/ForDevelopersLanding',
  component: ComponentCreator('/docs/11ForDevelopers/ForDevelopersLanding','9e4'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/HardwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/HardwareDevelopment','54f'),
  exact: true,
},
{
  path: '/docs/11ForDevelopers/SoftwareDevelopment',
  component: ComponentCreator('/docs/11ForDevelopers/SoftwareDevelopment','03f'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
