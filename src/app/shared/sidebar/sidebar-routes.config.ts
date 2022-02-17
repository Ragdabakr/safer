import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
      
    { path: '/full-layout/dashboard/dashboard1', title: 'لوحة التحكم', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
 
    {
        path: '', title: 'ادارة الحسابات', icon: 'ft-package', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path:  '/full-layout/full-pages/companies', title: 'الحسابات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            { path: '/full-layout/full-pages/flightTickets', title: 'شركات الطيران', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              
    {
        path: '', title: 'إعدادات الحساب', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/account-settings', title: 'الإعدادات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false ,submenu: [] },
            { path: '/full-layout/full-pages/profile', title: 'الملف الشخصي', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           
        ]
    },
            
        ]
    },
  
    {
        path: '', title: 'البرامج السياحية', icon: 'ft-more-vertical', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/createTour', title: 'إضافة رحلة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/createBooking', title: 'إضافة حجز لبرنامج سياحي', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/booking', title: 'حجوزات البرامج السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/tours', title: 'الرحلات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {path:  '/full-layout/full-pages/invoices', title: 'الفواتير', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            {path: '/full-layout/full-pages/guides', title: 'المرشدين السياحيين', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            { path: '/full-layout/full-pages/hotels', title: 'الفنادق', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {path: '/full-layout/full-pages/transports', title: 'المواصلات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true,  submenu: [] },
          
        ]
    },

    {
        path: '', title: 'تذاكر الطيران', icon: 'ft-globe', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            
            { path: '/full-layout/full-pages/bookingFlightTickets', title: 'حجز تذاكر الطيران', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/cancelFlightTicket', title: ' الغاء حجز  تذكرة طيران', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/flightTicketsList', title: ' التذاكر', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: ' التأشيرات', icon: 'ft-flag', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            
            { path: '/full-layout/full-pages/bookingVisa', title: 'حجز تأشيرة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/cancelVisa', title: ' الغاء حجز تأشيرة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/visaList', title: ' التأشيرات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'المالية', icon: 'ft-package', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path:  '/full-layout/full-pages/safeBox', title: 'الخزنة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            { path: '/full-layout/full-pages/bonds', title: 'السندات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
           
            
        ]
    },
    {path: '', title: 'كشف حساب', icon: 'ft-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/full-layout/full-pages/companiesStatement', title: 'الشركات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/full-layout/full-pages/accountsBalanceComponent', title: ' أرصدة الحسابات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/full-layout/full-pages/commissionsComponent', title: ' العمولات والمصروفات ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        
    ]
},
    {
        path: '', title: 'الموظفين', icon: 'ft-users', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/roles', title: 'الصلاحيات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/users', title: 'الموظفين', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
            
        ]
    },
    {
        path: '', title: 'التقارير', icon: 'ft-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/groupsReport', title: 'تقارير الجروبات السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/full-layout/full-pages/bookingsReport', title: ' Bookingstats', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },
   
    {
        path: '', title: 'الإحصائيات', icon: 'ft-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/toursReport', title: 'احصائيات البرامج السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/bookingsReport', title: 'احصائيات الحجوزات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },
    // {
    //     path: '', title: 'كشف حساب', icon: 'ft-pie-chart', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //         { path: '/full-layout/full-pages/companiesStatement', title: 'الشركات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/full-layout/full-pages/accountsBalanceComponent', title: ' أرصدة الحسابات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/full-layout/full-pages/commissionsComponent', title: ' العمولات والمصروفات ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

            
    //     ]
    // },
 

    
    // {
    //     path: '', title: 'Travel-agents', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //         { path: '/pages/travelAgents', title: 'travel-agents', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           
    //     ]
    // },
       
    // {
    //     path: '', title: 'Travellers', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //         { path: '/pages/travellers', title: 'travellers', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
    //     ]
    // },

    // {
    //     path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //         { path: '/full-layout/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/full-layout/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
  

    
   
    // {
    //     path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/verticaltimeline', title: 'Vertical Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/lockscreen', title: 'Lock Screen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/invoice', title: 'Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/comingsoon', title: 'Coming Soon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/maintenance', title: 'Maintenance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/gallery', title: 'Gallery', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/search', title: 'Search', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/faq', title: 'FAQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/kb', title: 'Knowledge Base', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
];

