<b> Content structures</b></br>
I understand this task concerns ONLY the home page, as the design element sugest. Also I've tried to restrain from asking questions since you 
would also want to access my capability to work independantely. One region would have been enough for the entire site. 
However I've have added 3 more regions, in addtion to the required "content" to make the style more manageable and consistent
with de the design. Each section of page is either a static block, or a block from views. I've assigned them into the different
regions based on personal opinion of what look more like a footer, header, or a content, etc. </br></br>

It wasn't clear if the first image is a siliding banner or a static image. I've implemented something in between. 
That is, a views that list a  single content. From there, it would be much eaiser to 
complement it to a full banner features should it be needed/b></br>


<b> Theming and Style</b></br>
Usually I would clone a full exiting theme and starting my chanings on that base. I do this so that pages that doesn't 
have specific design can heritate some acceptable style. 
For a full project I would use the exiting regions for internal pages and create a page--front.tpl.php for the home. 
However for this test, since working from scratch has been asked, with only files that are needed.</br></br>

The style is written with much scss standard as possible.
I've used the modules Preprocessor (prepro) and Sassy core SASS+SCSS compiler (sassy) along with the php compiler
rather that settings sass in the OS.</br></br>

For the carousel effect for "Our member" and "blog" section, I have used two externals js on top of the views. 
Using a slider module would have accomplished the same effect, but for this single page site, 
I have opted for lightweigthness over ready made module wiht plenty of feature</b></br>

Image handling: Not knowing how heavy will the full project be in image, I've choose to use core image handling style.
In normal sitation however, different image style and breakpionts should be applied to views to enable different image size for 
different devices.

<b>Others</b></br>


Accessing the site: http://54.253.250.252/op/ admin logins are admin/admin
