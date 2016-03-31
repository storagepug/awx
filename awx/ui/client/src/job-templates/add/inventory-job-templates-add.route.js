/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import {templateUrl} from '../../shared/template-url/template-url.factory';

export default {
    name: 'inventoryJobTemplateAdd',
    url: '/inventories/:inventory_id/job_templates/add',
    templateUrl: templateUrl('job-templates/add/job-templates-add'),
    controller: 'JobTemplatesAdd',
    resolve: {
        features: ['FeaturesService', function(FeaturesService) {
            return FeaturesService.get();
        }]
    }
};