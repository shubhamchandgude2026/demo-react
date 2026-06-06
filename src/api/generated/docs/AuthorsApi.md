# AuthorsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1AuthorsAuthorsBooksIdBookGet**](#apiv1authorsauthorsbooksidbookget) | **GET** /api/v1/Authors/authors/books/{idBook} | |
|[**apiV1AuthorsGet**](#apiv1authorsget) | **GET** /api/v1/Authors | |
|[**apiV1AuthorsIdDelete**](#apiv1authorsiddelete) | **DELETE** /api/v1/Authors/{id} | |
|[**apiV1AuthorsIdGet**](#apiv1authorsidget) | **GET** /api/v1/Authors/{id} | |
|[**apiV1AuthorsIdPut**](#apiv1authorsidput) | **PUT** /api/v1/Authors/{id} | |
|[**apiV1AuthorsPost**](#apiv1authorspost) | **POST** /api/v1/Authors | |

# **apiV1AuthorsAuthorsBooksIdBookGet**
> Array<Author> apiV1AuthorsAuthorsBooksIdBookGet()


### Example

```typescript
import {
    AuthorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

let idBook: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1AuthorsAuthorsBooksIdBookGet(
    idBook
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idBook** | [**number**] |  | defaults to undefined|


### Return type

**Array<Author>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthorsGet**
> Array<Author> apiV1AuthorsGet()


### Example

```typescript
import {
    AuthorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

const { status, data } = await apiInstance.apiV1AuthorsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Author>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthorsIdDelete**
> apiV1AuthorsIdDelete()


### Example

```typescript
import {
    AuthorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1AuthorsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthorsIdGet**
> Author apiV1AuthorsIdGet()


### Example

```typescript
import {
    AuthorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1AuthorsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Author**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthorsIdPut**
> Author apiV1AuthorsIdPut()


### Example

```typescript
import {
    AuthorsApi,
    Configuration,
    Author
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

let id: number; // (default to undefined)
let author: Author; // (optional)

const { status, data } = await apiInstance.apiV1AuthorsIdPut(
    id,
    author
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **author** | **Author**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Author**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthorsPost**
> Author apiV1AuthorsPost()


### Example

```typescript
import {
    AuthorsApi,
    Configuration,
    Author
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorsApi(configuration);

let author: Author; // (optional)

const { status, data } = await apiInstance.apiV1AuthorsPost(
    author
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **author** | **Author**|  | |


### Return type

**Author**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

