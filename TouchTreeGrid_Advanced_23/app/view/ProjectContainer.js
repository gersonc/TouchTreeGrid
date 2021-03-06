/*
 * File: app/view/ProjectContainer.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.ProjectContainer', {
    extend: 'Ext.Container',
    alias: 'widget.projectContainer',

    requires: [
        'TouchTreeGrid.view.TouchTreeGrid',
        'Ext.tab.Panel',
        'Ext.tab.Bar'
    ],

    config: {
        ui: 'light',
        layout: 'fit',
        items: [
            {
                xtype: 'tabpanel',
                itemId: 'projecttabpanel',
                ui: 'light',
                items: [
                    {
                        xtype: 'container',
                        title: 'Ex #1',
                        itemId: 'example2container',
                        layout: 'card',
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                listPlugins: {
                                    xclass: 'Ext.plugin.PullRefresh',
                                    listeners: {
                                        latestfetched: function() {this.up('touchtreegrid').fireEvent('pullrefresh', this.up('touchtreegrid'));}
                                    }
                                    //  refreshFn: function(plugin) {this.up('touchtreegrid').fireEvent('pullrefresh', this.up('touchtreegrid'));}
                                },
                                categDepthColors: true,
                                store: 'projectsStore',
                                onItemDisclosure: true,
                                columns: [
                                    {
                                        header: 'Task',
                                        dataIndex: 'task',
                                        width: '35%',
                                        style: 'text-align: left;',
                                        categStyle: 'font-weight: bold; text-align: left; color: #692047;',
                                        headerStyle: 'text-align: left; color: #ccc;'
                                    },
                                    {
                                        header: 'User',
                                        dataIndex: 'user',
                                        width: '35%',
                                        style: 'text-align: left; padding-left: .5em;',
                                        categStyle: 'text-align: left;padding-left: .5em;',
                                        headerStyle: 'text-align: left; color: #ccc;padding-left: .5em;'
                                    },
                                    {
                                        header: 'Dur',
                                        dataIndex: 'duration',
                                        width: '15%',
                                        style: 'text-align: right;',
                                        categStyle: 'text-align: right;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }/*    ,{
                                        header: 'Done?',
                                        dataIndex: 'done',
                                        width: '15%',
                                        style: 'text-align: right; font-size: .6em;',
                                        categStyle: 'text-align: right;font-size: .6em;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }*/
                                ],
                                disclosureProperty: 'leaf',
                                listItemId: 'example2list',
                                categDepthColorsArr: [
                                    '#808127',
                                    '#949569',
                                    '#C5C678'
                                ],
                                applyDefaultCollapseLevel: false,
                                landscapeIcon: './resources/images/Recycle.png',
                                helpHtml: './resources/html/ProjectExample.html',
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-example2'
                                ],
                                itemId: 'example2'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Ex #2',
                        itemId: 'example2Bcontainer',
                        layout: 'card',
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                categDepthColors: true,
                                store: 'projectsStore',
                                onItemDisclosure: true,
                                columns: [
                                    {
                                        header: 'Task',
                                        dataIndex: 'task',
                                        width: '35%',
                                        style: 'text-align: left;',
                                        categStyle: 'font-weight: bold; text-align: left; color: #f4f4f4;',
                                        headerStyle: 'text-align: left; color: #ccc;'
                                    },
                                    {
                                        header: 'User',
                                        dataIndex: 'user',
                                        width: '35%',
                                        style: 'text-align: left; padding-left: .5em;',
                                        categStyle: 'text-align: left;padding-left: .5em;',
                                        headerStyle: 'text-align: left; color: #ccc;padding-left: .5em;'
                                    },
                                    {
                                        header: 'Dur',
                                        dataIndex: 'duration',
                                        width: '15%',
                                        style: 'text-align: right;',
                                        categStyle: 'text-align: right;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }/*    ,{
                                        header: 'Done?',
                                        dataIndex: 'done',
                                        width: '15%',
                                        style: 'text-align: right; font-size: .6em;',
                                        categStyle: 'text-align: right;font-size: .6em;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }*/
                                ],
                                variableHeights: false,
                                itemHeight: 32,
                                listItemId: 'example2Blist',
                                categDepthColorsArr: [
                                    '#808127',
                                    '#949569',
                                    '#C5C678'
                                ],
                                applyDefaultCollapseLevel: false,
                                landscapeIcon: './resources/images/Recycle.png',
                                helpHtml: './resources/html/Project2Example.html',
                                categCssArr: [
                                    'touchtreegrid-list-categ0',
                                    'touchtreegrid-list-categ',
                                    'touchtreegrid-list-categ'
                                ],
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-example2',
                                    'x-touchtreegrid-list-example2B'
                                ],
                                itemId: 'example2B'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Ex #3',
                        itemId: 'example2Ccontainer',
                        layout: 'card',
                        items: [
                            {
                                xtype: 'touchtreegrid',
                                categDepthColors: true,
                                store: 'projectsStore',
                                columns: [
                                    {
                                        header: 'Task',
                                        dataIndex: 'task',
                                        width: '35%',
                                        style: 'text-align: left;',
                                        categStyle: 'font-weight: bold; text-align: left; color: blue;',
                                        headerStyle: 'text-align: left; color: #ccc;'
                                    },
                                    {
                                        header: 'User',
                                        dataIndex: 'user',
                                        width: '35%',
                                        style: 'text-align: left; padding-left: .5em;',
                                        categStyle: 'text-align: left;padding-left: .5em;',
                                        headerStyle: 'text-align: left; color: #ccc;padding-left: .5em;'
                                    },
                                    {
                                        header: 'Dur',
                                        dataIndex: 'duration',
                                        width: '15%',
                                        style: 'text-align: right;',
                                        categStyle: 'text-align: right;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }/*    ,{
                                        header: 'Done?',
                                        dataIndex: 'done',
                                        width: '15%',
                                        style: 'text-align: right; font-size: .6em;',
                                        categStyle: 'text-align: right;font-size: .6em;',
                                        headerStyle: 'text-align: right; color: #ccc;'
                                    }*/
                                ],
                                variableHeights: false,
                                itemHeight: 32,
                                listItemId: 'example2Clist',
                                categDepthColorsArr: [
                                    'white',
                                    'white',
                                    'white'
                                ],
                                categDepthColorButtons: false,
                                applyDefaultCollapseLevel: false,
                                landscapeIcon: './resources/images/Recycle.png',
                                helpHtml: './resources/html/Project3Example.html',
                                cls: [
                                    'x-touchtreegrid-list',
                                    'x-touchtreegrid-list-example2',
                                    'x-touchtreegrid-list-example2C'
                                ],
                                itemId: 'example2C'
                            }
                        ]
                    }
                ],
                tabBar: {
                    cls: 'projectTabBar',
                    docked: 'top',
                    style: 'background-image: -webkit-linear-gradient(top, rgb(86, 167, 223), rgb(43, 145, 215) 3%, rgb(33, 117, 175));',
                    ui: 'light'
                }
            }
        ]
    }

});