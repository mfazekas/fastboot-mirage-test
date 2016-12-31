export default function(server) {
  server.create('author', {name: "Foo", title: "Foo title"});
  server.create('author', {name: "Bar", title: "Bar title"});
}
