from django.conf.urls import url
from binchgame import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^game/$', views.game, name = 'game'),
    url(r'^game2/$', views.game2, name = 'game2'),
    #url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    #url(r'^post/new/$', views.post_new, name='post_new'),
    #url(r'^post/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
]
