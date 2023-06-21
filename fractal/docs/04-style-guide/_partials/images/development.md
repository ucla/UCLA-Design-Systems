---
handle: images-development
---
There are a couple utility classes you can use for images.

#### Responsive Images

Add the `.ucla-img-responsive` class to an image.

<img class="ucla-img-responsive" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" />

```html
<img class="ucla-img-responsive" src="image.jpg" alt="Description of the image" />
```

#### Rounded Images

Add the `.ucla-img-rounded` to an image.

**Note: Make sure that your image is a 1:1 ratio**

<div style="max-width: 220px">
  <img class="ucla-img-rounded" src="/theme-assets/img/examples/person-card-gene.jpg" />
</div>

```html
<img class="ucla-img-rounded" src="image.jpg" alt="Description of the image" />
```

#### Aspect Ratio

If you need an image to be a certain aspect ratio, you'll need to wrap the image in a `<figure class="ucla-img-ratio">` with the following class:

<table class="ucla-table my-5 ucla-table__border docs-table">
  <thead>
    <tr>
      <th>Aspect Ratio</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr> 
      <td>1:1</td>
      <td><code>.ucla-img-ratio-1x1</code></td> 
    </tr>
    <tr> 
      <td>3:2</td>
      <td><code>.ucla-img-ratio-3x2</code></td> 
    </tr>
    <tr> 
      <td>4:3</td>
      <td><code>.ucla-img-ratio-4x3</code></td> 
    </tr>
    <tr> 
      <td>2:3</td>
      <td><code>.ucla-img-ratio-2x3</code></td> 
    </tr>
    <tr> 
      <td>3:4</td>
      <td><code>.ucla-img-ratio-3x4</code></td> 
    </tr>
    <tr> 
      <td>16:9</td>
      <td><code>.ucla-img-ratio-16x9</code></td> 
    </tr>
  </tbody>
</table>

<figure class="ucla-img-ratio ucla-img-ratio-3x2">
  <img src="/theme-assets/img/examples/event-card-example-1.jpg" />
</figure>

```html
<figure class="ucla-img-ratio ucla-img-ratio-3x2">
  <img src="image.jpg" alt="Description of the image" />
</figure>
```
