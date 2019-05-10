#!/usr/bin/env python
# coding: utf-8

# In[1]:


from keras.models import Sequential
from keras.layers import Conv2D
from keras.layers import MaxPooling2D
from keras.layers import Flatten
from keras.layers import Dense


# In[2]:


classifier = Sequential()


# In[3]:


classifier.add(Conv2D(32, (3, 3), input_shape = (64, 64, 3), activation = 'relu'))


# In[4]:


classifier.add(MaxPooling2D(pool_size = (2, 2)))


# In[5]:


classifier.add(Flatten())


# In[6]:


classifier.add(Dense(units = 128, activation = 'relu'))


# In[7]:


classifier.add(Dense(units = 1, activation = 'sigmoid'))


# In[8]:


classifier.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])


# In[9]:


from keras.preprocessing.image import ImageDataGenerator


# In[13]:


train_datagen = ImageDataGenerator(rescale = 1./255,
shear_range = 0.2,
zoom_range = 0.2,
horizontal_flip = True)
test_datagen = ImageDataGenerator(rescale = 1./255)
training_set = train_datagen.flow_from_directory('Data/train',target_size = (64, 64),batch_size = 32,class_mode = 'binary')
test_set = test_datagen.flow_from_directory('Data//test',target_size = (64, 64),batch_size = 32,class_mode = 'binary')


# In[ ]:





# In[14]:


classifier.fit_generator(training_set,
                         steps_per_epoch = 500,
                         epochs = 2,
                         validation_data = test_set,
                         validation_steps = 200)


# In[24]:


import numpy as np
from keras.preprocessing import image
test_image = image.load_img('cjk.jpg', target_size = (64, 64))
test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image, axis = 0)
result = classifier.predict(test_image)
training_set.class_indices
if result[0][0] == 1:
  prediction = 'notfire'
else:
  prediction = 'fire'
print(prediction)


# In[25]:


prediction


# In[ ]:




