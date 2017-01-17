# Bus Mall user stories

## Users
* Focus Group Member = FGM
* Marketing Team Member = MTM
* Developer = Developer

# User stories

## FGM
* I want to survey images of products, three at a time.
* I want images to fill the full width of the page.
* I want to be instructed on how to interact with the images.
* I want my selection to be clearly defined (such as with a text pop-over saying "Click to pick this one!" )
* I want to be taken to a second set of three image after each selection.
* I want to see the images as many times as it takes for me to choose 25.
* I want to see the result of my survey.
* I want the survey results to be presented in an attractive format. (*needs clarification*: is this a table or a grid of the images or something else?)
* *nice to have*: I want to be able to choose "none of these" if I don't like any of the images.

## MTM
* I want the FGM to see all images presented equally (width, height, effects and resolution) so there is not a tainted perception of one being better than others based on presentation.
* I want the images to be displayed in random order.
* I want the FGM to only see results of the survey after 25 selections have been made.
* I want to see the number of times each image is displayed.
* I want to see the number of times each image is clicked on.
* I want to see the number of times the image was chosen as a percentage times it was displayed.
* *nice to have*: I want the FGM to see an informative pop-over of text, nicely formatted, describing each product depicted in each image.
* *nice to have*: I want to know how many times the FGM skipped all images with "none of these" option.
* *nice to have*: I want to know what images were displayed when FGM selected "none of these" option.

## Developer
* I want to use a wrapper to keep my images neatly centered on page.
* I want to use a literal constructor for keeping track of each image's metrics, to keep my code dry.
* I want to use multiple stylesheets, to keep my CSS easy to use, read, and organize.
* I want to build and style only one page, for the survey. (see next story)
* *stretch*: I want to have the results slide down onto the screen, after the FGM has finished selecting 25 images.
or-else
* I want the have a separate page open with results displayed.
* I want to dynamically create the results page.
