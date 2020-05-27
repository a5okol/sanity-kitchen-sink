export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ece13d799057a63709d1748',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tu9q3ept',
                  apiId: 'a7162432-0a27-4b00-bbfe-5fec3b8637a3'
                },
                {
                  buildHookId: '5ece13d764c81901d8774d1e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5so31nav',
                  apiId: '2d5456a3-c792-4298-8980-5a271f218ac8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a5okol/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5so31nav.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
