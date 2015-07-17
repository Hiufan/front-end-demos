{{each mdFiles as mdFile index}}
    <li><a href="/detail/{{mdFile | getFilename}}">{{index}} -- {{mdFile | getFilename}}</a></li>
{{/each}}